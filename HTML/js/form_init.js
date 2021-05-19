const instructor_form = {
    topics: [
        {
            topic: "การส่งเสริมให้เกิดสภาพแวดล้อมการเรียนรู้ที่ดี",
            sub_topics: [
                {
                    title: "ปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียน",
                    choices: [
                        "ปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียน อบอุ่นอย่างสม่ำเสมอ ใส่ใจผู้เรียนอย่างทั่วถึง บรรยากาศไม่เครียด ให้เกียรติผู้เรียน มีความยุติธรรม",
                        "มีปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียนเชิงบวกตลอดการสอน ให้เกียรติผู้เรียนอย่างทั่วถึง มีความยุติธรรม",
                        "มีปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียน เชิงบวกบ้าง ไม่มีปฏิสัมพันธ์เชิงลบ ให้เกียรติผู้เรียนส่วนใหญ่ มีความยุติธรรม",
                        "ไม่มีปฏิสัมพันธ์ระหว่างอาจารย์และผู้เรียนหรือมีปฏิสัมพันธ์เชิงลบมีพฤติกรรมที่แสดงถึงการไม่ให้เกียรติผู้เรียน ลำเอียง ไม่ยุติธรรม"
                    ]
                }
            ]
        },
        {
            topic: "การจัดกระบวนการเรียนรู้",
            sub_topics: [
                {
                    title: "การจัดกระบวนการเรียนรู้ที่เน้นการมีส่วนร่วมของผู้เรียน",
                    choices: [
                        "สอนโดยเน้นกิจกรรมเชิงรุก (Active Learning) ผู้เรียนได้ฝึกกระบวนการคิดวิเคราะห์ แก้ปัญหาในสถานการณ์จริงหรือกรณีศึกษา หรือปฏิบัติจริง โดยกิจกรรมดังกล่าวสอดคล้องกับศักยภาพของผู้เรียน",
                        "สอนโดยเน้นกิจกรรมเชิงรุก (Active Learning) ผู้เรียนได้ฝึกกระบวนการคิดวิเคราะห์",
                        "สอนโดยใช้วิธีบรรยายและมีกิจกรรมอื่น ๆ ประกอบที่ผู้เรียนมีส่วนร่วมบ้าง",
                        "สอนโดยใช้วิธีบรรยายเป็นหลัก โดยผู้เรียนเป็นเพียงผู้รับฟังแต่เพียงอย่างเดียว"
                    ]
                },
                {
                    title: "การใช้สื่อและทรัพยากรการเรียนรู้",
                    choices: [
                        "ใช้สื่อและทรัพยากรการเรียนรู้ที่ทันสมัย หลากหลาย เพื่อส่งเสริมหรือกระตุ้นการเรียนรู้ สอดคล้องกับกิจกรรมจัดการเรียนรู้ ยืดหยุ่นให้ผู้เรียนสามารถเลือกใช้ได้ตามความเหมาะสม เป็นตัวอย่างที่ดีในการอ้างอิงทรัพยากรการเรียนรู้",
                        "ใช้สื่อและทรัพยากรการเรียนรู้ที่ทันสมัย หลากหลาย เพื่อส่งเสริมหรือกระตุ้นการเรียนรู้สอดคล้องกับกิจกรรมจัดการเรียนรู้",
                        "ใช้สื่อและทรัพยากรการเรียนรู้ที่ส่งเสริมหรือกระตุ้นการเรียนรู้บ้าง",
                        "ไม่ใช้สื่อและทรัพยากรการเรียนรู้หรือใช้ไม่เหมาะสมต่อกระบวนการเรียนรู้"
                    ]
                },
                {
                    title: "การจัดกระบวนการเรียนรู้ให้สามารถนำไปประยุกต์ใช้ได้",
                    choices: [
                        "อาจารย์แจ้งเป้าหมายและวัตถุประสงค์ของหัวข้อที่สอน กิจกรรมการเรียนรู้สามารถทำให้บรรลุเป้าหมายได้ นำไปใช้ได้จริง",
                        "อาจารย์แจ้งเป้าหมายและวัตถุประสงค์ของหัวข้อที่สอน กิจกรรมการเรียนรู้สามารถทำให้บรรลุเป้าหมายได้",
                        "อาจารย์แจ้งเป้าหมายและวัตถุประสงค์ของหัวข้อที่สอน แต่กิจกรรมการเรียนรู้ยังไม่สามารถทำให้บรรลุเป้าหมายได้",
                        "อาจารย์ไม่ได้แจ้งเป้าหมายและวัตถุประสงค์ของหัวข้อที่สอน"
                    ]
                }
            ]
        },
        {
            topic: "การประเมินผล",
            sub_topics: [
                {
                    title: "การประเมินผลระหว่างการสอน",
                    choices: [
                        "มีการประเมินผลระหว่างการสอนในชั้นเรียน สอดคล้องกับวัตถุประสงค์ของหัวข้อที่สอน ให้ข้อมูลป้อนกลับแก่ผู้เรียน ส่งเสริมให้ผู้เรียนมีการประเมินตนเองหรือสะท้อนสิ่งที่ได้เรียนรู้",
                        "มีการประเมินผลระหว่างการสอนในชั้นเรียน สอดคล้องกับวัตถุประสงค์ของหัวข้อที่สอน ให้ข้อมูลป้อนกลับแก่ผู้เรียน ส่งเสริมให้ผู้เรียนมีการประเมินตนเองหรือสะท้อนสิ่งที่ได้เรียนรู้",
                        "มีการประเมินผลระหว่างการสอนในชั้นเรียน แต่ไม่สอดคล้องกับวัตถุประสงค์ของหัวข้อที่สอน",
                        "ไม่มีการประเมินผลระหว่างการสอนในชั้นเรียน"
                    ]
                }
            ]
        },
        {
            topic: "ความเป็นครู",
            sub_topics: [
                {
                    title: "การนำเสนอและบุคลิกภาพ",
                    choices: [
                        "มีความมั่นใจมาก การนำเสนอและคำอธิบายชัดเจน มีการยกตัวอย่างประกอบ การใช้ภาษาถูกต้องและเหมาะสม มีการใช้ภาษากายที่เหมาะสม การพูดและน้ำเสียงชัดเจน กระชับ ใช้เวลาได้อย่างเหมาะสม มีการย้ำบางประเด็นเมื่อจำเป็น การแต่งกายและท่าทางเหมาะสม ถูกกาลเทศะ",
                        "มีความมั่นใจ การนำเสนอชัดเจนเป็นส่วนใหญ่ คำอธิบายเข้าใจง่าย มีการยกตัวอย่างประกอบ การใช้ภาษาถูกต้อง การพูดและสำเนียงชัดเจน มีการตรวจสอบความเข้าใจของผู้เรียนเป็นระยะๆ การแต่งกายและท่าทางเหมาะสม ถูกกาละเทศะ",
                        "มีความมั่นใจพอควร การนำเสนอชัดเจน แต่อาจสั้นหรือยาวเกินไป ใช้เวลาไม่เหมาะสม ใช้ภาษาเหมาะสมเป็นส่วนใหญ่ คำอธิบายมีความสับสนบ้าง มีการตรวจสอบความเข้าใจของผู้เรียนเป็นบางครั้ง การแต่งกายและท่าทางเหมาะสม ถูกกาลเทศะ",
                        "ไม่มั่นใจ ทำให้เกิดความสับสน การใช้ภาษาไม่เหมาะสม การนำเสนอขาดประเด็นที่สำคัญ การพูดและสำเนียงไม่ชัดเจน การแต่งกายและท่าทางไม่เหมาะสม"
                    ]
                },
                {
                    title: "ความตรงต่อเวลา",
                    choices: [
                        "เข้าสอนและเลิกสอนตรงตามเวลาที่กำหนด ใช้เวลาได้อย่างเหมาะสม",
                        "เข้าสอนและ/หรือเลิกสอนไม่เป็นไปตามเวลาที่กำหนดไม่เกิน 5 นาที",
                        "เข้าสอนและ/หรือเลิกสอนไม่เป็นไปตามเวลาที่กำหนดมากกว่า 5 นาที แต่ไม่เกิน 10 นาที",
                        "เข้าสอนและ/หรือเลิกสอนไม่เป็นไปตามเวลาที่กำหนดเกินกว่า 10 นาที"
                    ]
                },
                {
                    title: "การส่งเสริมให้ผู้เรียนมีพฤติกรรมที่เหมาะสมรวมถึงการให้เกียรติผู้เรียน",
                    choices: [
                        "ส่งเสริม ชี้แนะ ตักเตือนให้ผู้เรียนมีพฤติกรรมที่เหมาะสมอย่างสร้างสรรค์และเป็นมิตร เชื่อมโยงหรือสอดคล้องกับเนื้อหาที่สอนแสดงพฤติกรรมที่เหมาะสมและเป็นแบบอย่างแก่ผู้เรียน",
                        "แนะนำ ส่งเสริม ตักเตือน อย่างสม่ำเสมอ เพื่อให้ผู้เรียนมีพฤติกรรมที่เหมาะสม",
                        "แนะนำ ส่งเสริม ให้ผู้เรียนมีพฤติกรรมที่เหมาะสมเป็นบางโอกาสและยกตัวอย่างพฤติกรรมที่ไม่เหมาะสมประกอบ",
                        "ไม่ได้แนะนำหรือส่งเสริมให้ผู้เรียนมีพฤติกรรมที่เหมาะสม ตำหนิผู้เรียนอันทำให้เกิดความอับอายในชั้นเรียนต่อหน้าสาธารณะ"
                    ]
                }
            ]
        },
        {
            topic: "ความคิดเห็นและข้อเสนอแนะอื่นๆ",
            form: true
        }
    ],
    scores: [
        {
            num: "4",
            word: "ดีมาก"
        },
        {
            num: "3",
            word: "ดี"
        },
        {
            num: "2",
            word: "พอใช้"
        },
        {
            num: "1",
            word: "ปรับปรุง"
        }
    ]
}

const subject_form = {
    topics: [
        {
            topic: "กำหนดวัตถุประสงค์ชัดเจน"
        },
        {
            topic: "กำหนดเนื้อหาไว้สอดคล้องกับวัตถุประสงค์"
        },
        {
            topic: "การเรียงลำดับเนื้อหาเหมาะสม"
        },
        {
            topic: "เนื้อหามีความทันสมัย"
        },
        {
            topic: "เนื้อหามีประโยชน์ในการนำไปประยุกต์ใช้"
        },
        {
            topic: "ความรู้ที่ได้รับจากการเรียนวิชานี้เป็นไปตามคาดหวังของผู้เรียน"
        },
        {
            topic: "โดยภาพรวมท่านพึงพอใจกับรายวิชานี้"
        },
        {
            topic: "ข้อเสนอแนะอื่นเพิ่มเติม",
            form: true
        }
    ],
    scores: [
        "มากที่สุด",
        "มาก",
        "ปานกลาง",
        "น้อย",
        "น้อยที่สุด",
        "ไม่สามารถประเมินได้"
    ]
}

document.addEventListener('DOMContentLoaded', function(e) {
    LoadInstructorForm()
    LoadSubjectForm()
})

function LoadInstructorForm()
{
    var content = document.getElementById('instructor-content')
    for(var topic of instructor_form.topics)
    {
        var topic_div = document.createElement('div')
        topic_div.className = 'topic'

        var heading = document.createElement('div')
        heading.className = 'heading'
        heading.innerHTML = topic.topic
        topic_div.appendChild(heading)

        var sub_topic_d = document.createElement('div')
        sub_topic_d.className = 'sub-topic'
        if((topic.form === undefined || !topic.form))
        {
            for(var sub_topic of topic.sub_topics)
            {
                var sub_heading = document.createElement('div')
                sub_heading.className = 'sub-heading'
                sub_heading.innerHTML = sub_topic.title
                sub_topic_d.appendChild(sub_heading)

                var form_choice = document.createElement('div')
                form_choice.className = 'form-choice'

                for(var index in sub_topic.choices)
                {
                    var choice_div = document.createElement('div')
                    choice_div.className = 'choice'

                    var toggle = document.createElement('div')
                    toggle.className = 'toggle'
                    toggle.innerHTML = '<span class="material-icons">done</span>'
                    choice_div.appendChild(toggle)

                    var scoreboard = document.createElement('div')
                    scoreboard.className = 'scoreboard'

                    var score = document.createElement('div')
                    score.className = 'score'
                    score.innerHTML = instructor_form.scores[index].num
                    scoreboard.appendChild(score)

                    var word = document.createElement('div')
                    word.className = 'word'
                    word.innerHTML = instructor_form.scores[index].word
                    scoreboard.appendChild(word)

                    choice_div.appendChild(scoreboard)

                    var description = document.createElement('div')
                    description.className = 'description'
                    description.innerHTML = sub_topic.choices[index]
                    choice_div.appendChild(description)

                    form_choice.appendChild(choice_div)
                }

                sub_topic_d.appendChild(form_choice)
            }
        }else{
            var opinion = document.createElement('textarea')
            opinion.id = 'instructor-opinion'
            sub_topic_d.appendChild(opinion)
        }
        topic_div.appendChild(sub_topic_d)
        content.appendChild(topic_div)
    }
}

function LoadSubjectForm()
{
    var content = document.getElementById('subject-content')
    for(var topic of subject_form.topics)
    {
        var topic_div = document.createElement('div')
        topic_div.className = 'topic'

        var heading = document.createElement('div')
        heading.className = 'heading'
        heading.innerHTML = topic.topic
        topic_div.appendChild(heading)

        if(topic.form === undefined || !topic.form)
        {
            var form_choice = document.createElement('div')
            form_choice.className = 'form-choice'

            for(var choice of subject_form.scores)
            {
                var choice_div = document.createElement('div')
                choice_div.className = 'choice'
                choice_div.innerHTML = choice

                form_choice.appendChild(choice_div)
            }

            topic_div.appendChild(form_choice)
        }else{
            var sub_topic_d = document.createElement('div')
            sub_topic_d.className = 'sub-topic'
            var opinion = document.createElement('textarea')
            opinion.id = 'subject-opinion'
            sub_topic_d.appendChild(opinion)
            topic_div.appendChild(sub_topic_d)
        }

        content.appendChild(topic_div)
    }
}