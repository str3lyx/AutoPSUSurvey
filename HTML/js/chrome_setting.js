class ExtensionSetting {
	
	// Chromium Version
	static async #getLocalStorageValue(key) {
		return new Promise((resolve, reject) => {
			chrome.storage.local.get(key, function (value) {
				resolve(value[key]);
			})
		})
	}
	
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
	
	static async getInstructorChoices()
	{
		let str = await this.#getLocalStorageValue('instructor_choice')
		console.log(str)
		
		if(str == undefined || str == null)
		{
			// set new value if there are none
			str = '00000000'
		}
		else if(str.length < 8)
		{
			// if string length is less than 8, then add '0'
			for(let i = str.length; i < 8; i++)
			{
				str = str + '0'
			}
		}
		else if(str.length > 8)
		{
			// if string length is more than 8, then splice string length to 8
			str = str.substring(0, 8)
		}
		
		// clean up error value
		var arr = str.split('')
		for(var i in arr)
		{
			arr[i] = parseInt(arr[i])
			if(Number.isNaN(arr[i]))
			{
				arr[i] = 0
			}
			else if(arr[i] < 0 || arr[i] > 3)
			{
				arr[i] = 0
			}
		}
			
		// save data change
		chrome.storage.local.set({instructor_choice: arr.toString().replaceAll(',', '')}, function(){})
		return new Promise((resolve, reject) => {
			resolve(arr)
		})
	}
	
	static setInstructorChoices(choices)
	{
		return this
	}
	
	static getInstructorChoice(index)
	{
		var arr = []
		if(index < 0 || index >= arr.length)
		{
			index = 0
		}
		
		return this
	}
	
	static setInstructorChoice(index, choice)
	{
		return this
	}
}