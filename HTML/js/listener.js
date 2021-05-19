var saveWidgetID = undefined

class ExtensionSave {
	#extension_enable = true
	#instructor_choice: ('00000000').split('')
	#instructor_opinion: ''
	#subject_choice: ('0000000').split('')
	#subject_opinion: ''
	
	static enableExtension()
	{
		var indicator = document.getElementById('btn-extension').getElementsByClassName('indicator')[0]
		indicator.classList.add('on')
		indicator.classList.remove('off')
		indicator.children[0].innerHTML = 'ON'
		indicator.children[1].innerHTML = 'toggle_on'
	}
	
	static disableExtension()
	{
		var indicator = document.getElementById('btn-extension').getElementsByClassName('indicator')[0]
		indicator.classList.add('off')
		indicator.classList.remove('on')
		indicator.children[0].innerHTML = 'OFF'
		indicator.children[1].innerHTML = 'toggle_off'
	}
	
	static getInstructorChoices()
	{
		return this.#instructor_choice.toString()
	}
	
	static setInstructorChoices(choices)
	{
		return this
	}
	
	static getInstructorChoice(index)
	{
		if(index >= this.#instructor_choice.length || index < 0) return -1
		return this.#instructor_choice[index]
	}
	
	static setInstructorChoice(index, choice)
	{
		try
		{
			choice = parseInt(choice)
			if(choice < 0 || choice >= 8)
				choice = 0
		}
		catch(err)
		{
			choice = 0
		}
		if(index < this.#instructor_choice.length && index >= 0)
			this.#instructor_choice[index] = choice
		return this
	}
}
var surveyChoice = {
	extension_enable: true,
	instructor_choice: '00000000',
	instructor_opinion: '',
	subject_choice: '0000000',
	subject_opinion: ''
}

window.onload = function(ev){

	// add click listender to .choice
	var index = 0
	for(var choice of document.getElementsByClassName('choice'))
	{
		choice.addEventListener('click', function(ev) {
			ev.preventDefault()
			
			// change select choice
			var isSameDiv = false
			for(var ch of this.parentNode.children)
			{
				if(this == ch && ch.classList.contains('choice-selected'))
				{
					isSameDiv = true
				}
				ch.className = 'choice'
			}
			this.className = 'choice-selected'

			var ch_index = 0
			for(var ch of this.parentNode.children)
			{
				if(this == ch)
				{
					break
				}
				ch_index += 1
			}

			// save setting
			if(index >= 0 && index < 8)
			{
				surveyChoice.instructor_choice = setCharAt(surveyChoice.instructor_choice, index,  ch_index.toString())
			}
			else if(index >= 8 && index < 15)
			{
				surveyChoice.subject_choice = setCharAt(surveyChoice.subject_choice, index - 8,  ch_index.toString())
			}
			saveSetting();
			console.log(surveyChoice)

			// delay toast notification for 2 second
			if(!isSameDiv)
			{
				// reset toast notification delay timer
				if(saveWidgetID !== undefined)
					clearTimeout(saveWidgetID)

				document.getElementById('save').classList.remove('toast')
				saveWidgetID = setTimeout(function(){
					document.getElementById('save').classList.add('toast')
				},2000);
			}
		})
		index++;
	}

	// add typing listener for #instructor-opinion
	document.getElementById('instructor-opinion').addEventListener('input', function(ev){
		if(saveWidgetID !== undefined)
			clearTimeout(saveWidgetID)
		
		document.getElementById('save').classList.remove('toast')
		saveWidgetID = setTimeout(function(){
			document.getElementById('save').classList.add('toast')
		},2000);
	})

	// add typing listener for #subject-opinion
	document.getElementById('subject-opinion').addEventListener('input', function(ev){
		if(saveWidgetID !== undefined)
			clearTimeout(saveWidgetID)
		
		document.getElementById('save').classList.remove('toast')
		saveWidgetID = setTimeout(function(){
			document.getElementById('save').classList.add('toast')
		},2000);
	})

	// sidebar choice selected
	for(var choice of document.getElementsByClassName('sidebar-choice'))
	{
		choice.addEventListener('click', function(ev){
			for(var ch of choice.parentNode.children)
			{
				if(ch.classList.contains('selected'))
					ch.classList.remove('selected')
			}
			this.classList.add('selected')
			if(this.id == 'btn-instructor')
			{
				document.getElementById('content').classList.add('instructor')
				document.getElementById('content').classList.remove('subject')
			}
			else if(this.id == 'btn-subject')
			{
				document.getElementById('content').classList.remove('instructor')
				document.getElementById('content').classList.add('subject')
			}
				
		})
	}

	// extension
	document.getElementById('btn-extension').addEventListener('click', function(ev){
		this.children[1].classList.toggle('on')
		this.children[1].classList.toggle('off')
		if(this.children[1].classList.contains('on'))
		{
			this.children[1].children[0].innerHTML = 'ON'
			this.children[1].children[1].innerHTML = 'toggle_on'
		}
		else if(this.children[1].classList.contains('off'))
		{
			this.children[1].children[0].innerHTML = 'OFF'
			this.children[1].children[1].innerHTML = 'toggle_off'
		}        
	})

	// external link
	document.getElementById('btn-goto').addEventListener('click',function(ev){
		if(document.getElementById('content').classList.contains('instructor'))
		{
			window.open('https://tes.psu.ac.th/login.asp', '_blank')
		}
		else if(document.getElementById('content').classList.contains('subject'))
		{
			window.open('https://infor.eng.psu.ac.th/se/student/authen', '_blank')
		}
	})

	// load setup
	loadSetting();
}

function loadSetting()
{
	// load instructor data
	try
	{
		chrome.storage.local.get(['instructor_choice'], function(result) {
			if(result['instructor_choice'] == undefined || result['instructor_choice'] == null || result['instructor_choice'].length != 8)
			{
				result['instructor_choice'] = '00000000'
			}
			surveyChoice.instructor_choice = result['instructor_choice']
		});
	}
	catch(err){ console.log('This is chromium-based extension.'); console.log(err); }

	var ins_choices = document.getElementById('instructor-content').getElementsByClassName('form-choice')
	for(var i = 0; i < 8; i++)
	{
		var score = 0
		try
		{
			score = parseInt(surveyChoice.instructor_choice.charAt(i))
			if(score < 0 || score > 3)
			{
				score = 0
				surveyChoice.instructor_choice = setCharAt(surveyChoice.instructor_choice, i, '0')
			}
		}
		catch(err)
		{
			score = 0
			surveyChoice.instructor_choice = setCharAt(surveyChoice.instructor_choice, i, '0')
		}
		
		ins_choices[i].children[score].className = 'choice-selected'
	}

	// load subject data
	try
	{
		chrome.storage.local.get(['subject_choice'], function(result) {
			if(result['subject_choice'] == undefined || result['subject_choice'] == null || result['subject_choice'].length != 7)
			{
				result['subject_choice'] = '0000000'
			}
			surveyChoice.subject_choice = result['subject_choice']
		})
	}
	catch(err){ console.log('This is chromium-based extension.'); console.log(err); }

	var sub_choices = document.getElementById('subject-content').getElementsByClassName('form-choice')
	for(var i = 0; i < 7; i++)
	{
		var score = 0
		try
		{
			score = parseInt(surveyChoice.subject_choice.charAt(i))
			if(score < 0 || score > 5)
			{
				score = 0
				surveyChoice.subject_choice = setCharAt(surveyChoice.subject_choice, i, '0')
			}
		}
		catch(err)
		{
			score = 0
			surveyChoice.subject_choice = setCharAt(surveyChoice.subject_choice, i, '0')
		}
		
		sub_choices[i].children[score].className = 'choice-selected'
	}

	// load instructor opinion
	try
	{
		chrome.storage.local.get(['instructor_opinion'], function(result) {
			if(result['instructor_opinion'] == undefined || result['instructor_opinion'] == null)
			{
				result['instructor_opinion'] = ''
			}
			surveyChoice.instructor_opinion = result['instructor_opinion']
		})
	}
	catch(err){ console.log('This is chromium-based extension.'); console.log(err); }
	document.getElementById('instructor-opinion').value = surveyChoice.instructor_opinion

	// load subject opinion
	try
	{
		chrome.storage.local.get(['subject_opinion'], function(result) {
			if(result['subject_opinion'] == undefined || result['subject_opinion'] == null)
			{
				result['subject_opinion'] = ''
			}
			surveyChoice.subject_opinion = result['subject_opinion']
		})
	}
	catch(err){ console.log('This is chromium-based extension.'); console.log(err); }
	document.getElementById('subject-opinion').value = surveyChoice.subject_opinion

	// load extension option
	try
	{
		chrome.storage.local.get(['extension_enable'], function(result) {
			if(result['extension_enable'] == undefined || result['extension_enable'] == null)
			{
				result['extension_enable'] = 'true'
			}
			surveyChoice.extension_enable = result['extension_enable'] === 'true' ? true : false
		})
	}catch(err){ console.log('This is chromium-based extension.'); console.log(err); }

	var indicator = document.getElementById('btn-extension').getElementsByClassName('indicator')[0]
	if(surveyChoice.extension_enable)
	{
		indicator.classList.add('on')
		indicator.classList.remove('off')
		indicator.children[0].innerHTML = 'ON'
		indicator.children[1].innerHTML = 'toggle_on'
	}
	else
	{
		indicator.classList.add('off')
		indicator.classList.remove('on')
		indicator.children[0].innerHTML = 'OFF'
		indicator.children[1].innerHTML = 'toggle_off'
	}
	
	saveSetting()
}

function saveSetting()
{
	try
	{
		chrome.storage.local.set({extension_enable: surveyChoice.extension_enable}, function(){})
		chrome.storage.local.set({instructor_choice: surveyChoice.instructor_choice}, function(){})
		chrome.storage.local.set({instructor_opinion: surveyChoice.instructor_opinion}, function(){})
		chrome.storage.local.set({subject_choice: surveyChoice.subject_choice}, function(){})
		chrome.storage.local.set({subject_opinion: surveyChoice.subject_opinion}, function(){})
	}
	catch(err)
	{
		console.log(err)
	}
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}