const categories = [
  {id:'all', icon:'▦', name:'All letters', th:'จดหมายทั้งหมด'},
  {id:'delivery', icon:'▣', name:'Delivery', th:'พัสดุ'},
  {id:'travel', icon:'✈', name:'Travel', th:'การเดินทาง'},
  {id:'work', icon:'▤', name:'Work', th:'งาน'},
  {id:'school', icon:'✎', name:'School', th:'การเรียน'},
  {id:'shopping', icon:'◈', name:'Shopping', th:'การซื้อของ'},
  {id:'events', icon:'✦', name:'Events', th:'กิจกรรม'},
  {id:'home', icon:'⌂', name:'Home', th:'บ้าน'},
  {id:'health', icon:'♡', name:'Wellbeing', th:'สุขภาพ'},
  {id:'friends', icon:'☻', name:'Friends', th:'เพื่อน'},
  {id:'community', icon:'❀', name:'Community', th:'ชุมชน'}
];

// Three distinct incoming emails per category. All are original practice scenarios.
const scenarios = [
  {category:'delivery', color:'#f5c9d5', items:{
    A2:['Emma','Where is my parcel?','Hi,\n\nThe tracking page says my parcel was delivered yesterday, but I cannot find it. My neighbor saw a box near my door. Can you help me find it?\n\nThanks,\nEmma',['say sorry|sorry,apolog','check the parcel|check,look for,investigate','ask about the neighbor|neighbor,neighbour','promise an update|update,reply,get back,let you know']],
    B1:['Noah','The wrong package arrived','Hello,\n\nI ordered a blue backpack, but the package I received contains a red jacket. I need the backpack for a trip next week. Could you explain how to return this item and when a replacement might arrive?\n\nKind regards,\nNoah',['acknowledge the mix-up|wrong,mistake,mix-up,incorrect','explain the return|return,send back,label','address the deadline|trip,next week,deadline','give a next step|replace,replacement,ship,send']],
    B2:['Priya','Repeated delivery delays','Dear Support Team,\n\nThis is the third time my order has been delayed without notice. The latest estimate has already passed, and the items are needed for a client event on Friday. Please clarify what caused the delay, confirm a realistic delivery date, and explain what you can do if the order does not arrive in time.\n\nSincerely,\nPriya',['acknowledge repeated delays|third,repeated,again,frustrat','explain investigation|investigat,check,trace,contact the carrier','give realistic timing|date,friday,estimate,confirm','offer contingency|refund,alternative,compensat,option']]}}
  ,{category:'travel', color:'#c6e9e3', items:{
    A2:['Luca','Changing my train ticket','Hi,\n\nI booked a train for Saturday, but I need to travel on Sunday instead. Is it possible to change my ticket? Please tell me if there is a fee.\n\nThank you,\nLuca',['acknowledge request|change,ticket','mention Sunday|sunday','explain fee or checking|fee,cost,price,check','give next step|booking,number,details,link']],
    B1:['Maya','Airport pickup question','Hello,\n\nOur flight lands at 10:45 p.m., later than we expected. We booked an airport pickup through your hotel. Will the driver still be there? We are traveling with a child, so we would appreciate clear directions for meeting the driver.\n\nBest,\nMaya',['confirm or check pickup|pickup,driver,confirm,check','acknowledge late arrival|late,10:45,arrival','give meeting directions|meet,exit,terminal,sign','reassure family|child,family,don’t worry,reassur']],
    B2:['Oliver','Accessibility at the guesthouse','Dear Team,\n\nBefore confirming our reservation, I would like to understand the accessibility of your guesthouse. One member of our group uses a wheelchair. Could you tell us about step-free access, bathroom facilities, and whether a ground-floor room is available? Please be specific so we can make an informed decision.\n\nRegards,\nOliver',['address step-free access|step-free,ramp,entrance,stairs','address bathroom|bathroom,shower,toilet','address room availability|ground-floor,ground floor,room','avoid unsupported guarantees|check,confirm,verify,details']]}}
  ,{category:'work', color:'#d7cef3', items:{
    A2:['Alex','Meeting time','Hi,\n\nCan we move our meeting from 2 p.m. to 3 p.m. tomorrow? I have another appointment at 2. Please let me know.\n\nAlex',['acknowledge change|move,change','mention 3 p.m.|3 p.m.,3pm,three','confirm tomorrow|tomorrow','close politely|regards,thanks,thank you,best']],
    B1:['Jordan','Project update needed','Hi,\n\nCould you send me a short update on the website project by Thursday? I need to know what is complete, what is still in progress, and whether you need any help before the launch.\n\nThanks,\nJordan',['confirm Thursday|thursday','summarize completed work|complete,finished,done','mention work in progress|progress,working on,remaining','mention support or risk|help,support,risk,need']],
    B2:['Samira','A missed deadline','Dear Colleague,\n\nThe draft proposal was due yesterday, and I have not received it. This leaves little time for review before our client meeting. Please explain the current status, identify any blockers, and propose a revised timeline that allows for a proper review.\n\nRegards,\nSamira',['acknowledge missed deadline|sorry,apolog,missed,delay','give status|draft,status,complete,progress','explain blocker|blocker,issue,reason','propose review timeline|timeline,review,by,send']]}}
  ,{category:'school', color:'#f5dfae', items:{
    A2:['Ms. Lee','Library book','Hello,\n\nYour library book is due on Monday. Do you need more time to finish it? Please reply before Friday.\n\nMs. Lee',['thank the sender|thank','say if more time is needed|more time,extend,return','mention Monday or Friday|monday,friday','close politely|regards,best,thank']],
    B1:['Professor Green','Group presentation','Dear Student,\n\nYour group presentation is next Wednesday. Please tell me who will cover each part and whether your group needs any equipment. Send the plan by Monday afternoon.\n\nBest,\nProfessor Green',['mention presentation date|wednesday','assign parts|part,section,present','address equipment|equipment,projector,laptop,none','confirm plan deadline|monday']],
    B2:['Admissions Office','Clarification about your application','Dear Applicant,\n\nThank you for applying to our summer programme. We noticed that your statement mentions volunteer work, but the dates on your application form are incomplete. Could you clarify when you volunteered, what responsibilities you had, and how the experience relates to your interest in the programme?\n\nSincerely,\nAdmissions Office',['clarify dates|date,month,year,from','describe responsibilities|responsib,helped,organized,supported','connect experience to programme|programme,program,interest,learn','keep formal tone|dear,sincerely,regards']]}}
  ,{category:'shopping', color:'#f5cdd6', items:{
    A2:['Sophie','Size exchange','Hi,\n\nThe sweater I bought is too small. Can I exchange it for a medium? I still have the receipt.\n\nThanks,\nSophie',['acknowledge size problem|size,small','mention medium|medium','explain exchange|exchange,swap,return','mention receipt|receipt']],
    B1:['Ethan','Refund for damaged headphones','Hello,\n\nMy headphones arrived with a broken charging port. I bought them online five days ago. I would prefer a refund rather than a replacement. What information do you need from me?\n\nRegards,\nEthan',['acknowledge damage|broken,damage,port','address refund preference|refund','request order details|order,number,receipt','explain next step|return,photo,process,label']],
    B2:['Aisha','Conflicting promotion terms','Dear Customer Service,\n\nYour newsletter advertised a 20% discount on all stationery, but the discount did not apply at checkout. The small print on the website appears to exclude several items without saying so in the email. Could you clarify the terms and offer a fair resolution for my order?\n\nKind regards,\nAisha',['acknowledge inconsistency|inconsisten,confus,unclear','clarify terms|terms,exclusion,eligible','address existing order|order,purchase,checkout','offer resolution|refund,adjust,credit,discount']]}}
  ,{category:'events', color:'#cde2f2', items:{
    A2:['Ben','Birthday party','Hi!\n\nI am having a small birthday party on Sunday at 4 p.m. Can you come? Please tell me if you have any food allergies.\n\nBen',['accept or decline|come,join,can’t,unable','mention Sunday|sunday','answer allergy question|allerg,no food,none','friendly closing|see you,thanks,best']],
    B1:['Nina','Volunteer at the festival','Hello,\n\nThank you for offering to help at our book festival. Could you work at the welcome desk from 9 a.m. to noon on Saturday? Please also tell us if you have any experience helping visitors.\n\nBest wishes,\nNina',['confirm availability|saturday,available,can work','mention time|9 a.m.,noon,9am,12','describe relevant experience|experience,visitor,helped','ask practical question|where,arrive,briefing,wear']],
    B2:['Daniel','Speaker schedule change','Dear Speaker,\n\nWe need to move your workshop from the morning to late afternoon because another speaker has cancelled. We understand this may affect your travel plans. Please let us know whether the new slot works, and suggest an alternative if it does not.\n\nRegards,\nDaniel',['acknowledge schedule change|schedule,change,slot','state availability|available,work,unable','address travel impact|travel,train,flight,transport','propose alternative if needed|alternative,earlier,later,another']]}}
  ,{category:'home', color:'#d4e3ca', items:{
    A2:['Mr. Patel','Water leak','Hello,\n\nThere is water under the kitchen sink in your apartment. Can you be home tomorrow morning so a plumber can visit?\n\nMr. Patel',['acknowledge leak|leak,water','answer availability|home,available,tomorrow','mention plumber|plumber','ask or confirm time|time,morning,when']],
    B1:['Rosa','Noise from upstairs','Hi,\n\nThe music from your apartment has been loud after 11 p.m. for the last two nights. I work early shifts and have not been sleeping well. Could you please keep the volume lower in the evenings?\n\nThanks,\nRosa',['apologize|sorry,apolog','acknowledge impact|sleep,work,disturb','promise lower volume|volume,quiet,music,lower','keep friendly tone|thanks,understand,neighbor']],
    B2:['Housing Office','Repair request follow-up','Dear Resident,\n\nWe received your report about the heating system. To prioritize repairs, please tell us when the problem started, which rooms are affected, and whether you have noticed any unusual noises or smells. We can arrange an inspection once we have these details.\n\nSincerely,\nHousing Office',['state when issue began|started,since,date,day','identify affected rooms|room,bedroom,living','describe noise or smell|noise,smell,none','request inspection|inspection,visit,appointment']]}}
  ,{category:'health', color:'#f1cfcc', items:{
    A2:['Dr. Kim’s Office','Your appointment','Hello,\n\nYour appointment is on Tuesday at 10 a.m. Please confirm if you can come. If not, tell us another day that works for you.\n\nReception Team',['confirm or reschedule|confirm,come,reschedule','mention Tuesday time|tuesday,10 a.m.,10am','offer another day if needed|wednesday,thursday,friday,monday,another','polite closing|thank,regards,best']],
    B1:['Fitness Club','Class feedback','Hi,\n\nYou joined our beginner yoga class last week. We would love to hear what you enjoyed and what we could improve. Would you also be interested in a weekend class?\n\nThanks,\nThe Fitness Club',['mention something enjoyed|enjoy,liked','suggest improvement|improv,more,less,better','answer weekend question|weekend,saturday,sunday','give useful detail|instructor,pace,time,space']],
    B2:['Wellness Coordinator','Planning a team wellbeing session','Dear Team Member,\n\nWe are planning a voluntary wellbeing session for next month. What topics would be most useful to your team, and what format would make it accessible to people working remotely? Please also raise any scheduling concerns.\n\nBest,\nWellness Coordinator',['suggest topics|stress,break,exercise,sleep,mindful','suggest remote format|remote,online,video,record','address scheduling|schedule,time,shift,calendar','respect voluntary nature|voluntary,optional,choice']]}}
  ,{category:'friends', color:'#e4d3f5', items:{
    A2:['Mia','Coffee this weekend?','Hey!\n\nAre you free for coffee on Saturday? I know a quiet place near the park. Let me know what time is good for you.\n\nMia',['answer invitation|yes,free,can,can’t','mention Saturday|saturday','suggest a time|10,11,12,1,2,3,4,time','friendly closing|see you,thanks,cheers']],
    B1:['Theo','A friend needs advice','Hi,\n\nI was offered a new job in another city, but I am nervous about moving away from friends. You moved last year. What helped you settle in, and how did you keep in touch with people back home?\n\nThanks,\nTheo',['acknowledge feelings|nervous,understand,normal','share settling-in advice|settle,join,explore,meet','suggest keeping in touch|call,message,visit,video','encourage without deciding for them|consider,hope,think,choice']],
    B2:['Clara','Our plans after the disagreement','Dear Friend,\n\nI know our conversation last weekend became tense. I felt hurt when my idea was dismissed, but I also realize I interrupted you. I value our friendship and would like to talk calmly before we make plans for next month. Would you be open to that?\n\nClara',['acknowledge her feelings|hurt,feel,sorry','take responsibility where appropriate|interrupt,dismiss,apolog','value friendship|friendship,value,care','suggest calm conversation|talk,meet,call,calm']]}}
  ,{category:'community', color:'#d4ead4', items:{
    A2:['Community Library','Book donation','Hello,\n\nWe are collecting children’s books this month. Do you have any books to donate? You can bring them to the library on Saturday.\n\nThank you,\nCommunity Library',['answer donation request|donate,books,have,can’t','mention Saturday|saturday','ask or confirm drop-off|bring,drop off,library','polite closing|thank,regards,best']],
    B1:['Park Volunteers','Community clean-up','Hi,\n\nWe are organizing a park clean-up next weekend. Can you help for two hours? We will provide gloves and bags, but please bring water. Let us know if you have any questions.\n\nBest,\nPark Volunteers',['answer availability|can,available,unable','mention two hours|two hours,2 hours','acknowledge supplies|gloves,bags,water','ask practical question|where,when,start,meet']],
    B2:['Local Council','Feedback on the new cycle lane','Dear Resident,\n\nWe are collecting feedback about the proposed cycle lane on Oak Street. Please tell us what benefits you expect, any safety concerns, and one practical change that would improve the design for pedestrians and cyclists.\n\nRegards,\nLocal Council',['describe benefit|benefit,safer,traffic,air','raise safety concern|safety,risk,intersection,visibility','propose practical change|crossing,barrier,sign,light','consider both users|pedestrian,cyclist,both']]}}
];

const levels = {A2:{target:'40–70',min:40,max:70},B1:{target:'70–110',min:70,max:110},B2:{target:'110–160',min:110,max:160}};
const hintsByLevel = {
  A2:['Start with “Dear [name],” and thank the sender.','Use short sentences: “I can…”, “I will…”, “Could you…?”','End with “Best regards,” and your name.'],
  B1:['Answer each question in a separate sentence or paragraph.','Explain the next step and when it will happen.','Use connectors like “because”, “however”, and “so”.'],
  B2:['Acknowledge the sender’s concern before offering a solution.','Be precise about timing, limits, and next steps.','Use a professional tone without promising what you cannot confirm.']
};
const vocabByCategory = {
  delivery:[['parcel','พัสดุ'],['tracking','การติดตามสถานะ'],['investigate','ตรวจสอบ'],['replacement','สินค้าทดแทน']],
  travel:[['reservation','การจอง'],['arrival','การมาถึง'],['available','พร้อม / ว่าง'],['accessible','เข้าถึงได้']],
  work:[['deadline','กำหนดส่ง'],['update','ความคืบหน้า'],['review','ตรวจทาน'],['blocker','อุปสรรค']],
  school:[['assignment','งานที่ได้รับมอบหมาย'],['extend','ขยายเวลา'],['equipment','อุปกรณ์'],['clarify','ชี้แจง']],
  shopping:[['exchange','เปลี่ยนสินค้า'],['receipt','ใบเสร็จ'],['refund','คืนเงิน'],['resolution','ทางออก']],
  events:[['invitation','คำเชิญ'],['volunteer','อาสาสมัคร'],['schedule','ตารางเวลา'],['alternative','ทางเลือก']],
  home:[['leak','รอยรั่ว'],['plumber','ช่างประปา'],['volume','ระดับเสียง'],['inspection','การตรวจสอบ']],
  health:[['appointment','การนัดหมาย'],['reschedule','เปลี่ยนเวลานัด'],['wellbeing','สุขภาวะ'],['voluntary','โดยสมัครใจ']],
  friends:[['settle in','ปรับตัวกับที่ใหม่'],['keep in touch','ติดต่อกันต่อ'],['disagreement','ความเห็นไม่ตรงกัน'],['appreciate','เห็นคุณค่า']],
  community:[['donation','การบริจาค'],['clean-up','การทำความสะอาด'],['pedestrian','คนเดินเท้า'],['proposal','ข้อเสนอ']]
};

const $ = id => document.getElementById(id);
const state = {category:'all',level:'A2',selected:null,mode:'demo',model:null,submitting:false};
const progressKey='lostletters-progress-v1';
const draftsKey='lostletters-drafts-v1';
const feedbackKey='lostletters-local-ai-feedback-v1';
function safeLoad(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}}
let progress=safeLoad(progressKey,{xp:0,completed:{}});
let drafts=safeLoad(draftsKey,{});
let feedbackHistory=safeLoad(feedbackKey,{});
if(!feedbackHistory||typeof feedbackHistory!=='object'||Array.isArray(feedbackHistory))feedbackHistory={};
const save=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
const make=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el};
const countWords=text=>{const list=text.trim().match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu);return list?list.length:0};
function getMessages(){return scenarios.filter(s=>state.category==='all'||s.category===state.category).map(s=>{const [sender,subject,body,rawGoals]=s.items[state.level];return {id:`${s.category}-${state.level}`,category:s.category,color:s.color,level:state.level,sender,subject,body,goals:rawGoals.map(g=>{const [label,terms]=g.split('|');return {label,terms:terms.split(',')}})}})}
function selectedMessage(){return getMessages().find(m=>m.id===state.selected)||getMessages()[0]}
function renderCategories(){const nav=$('categoryNav');nav.replaceChildren();for(const cat of categories){const b=make('button','category-button'+(state.category===cat.id?' active':''));b.type='button';b.setAttribute('aria-pressed',state.category===cat.id);b.append(make('span','category-icon',cat.icon),make('span','',cat.name));if(cat.id!=='all')b.append(make('span','category-count','03'));b.addEventListener('click',()=>{state.category=cat.id;state.selected=null;render()});nav.append(b)}}
function renderLevels(){document.querySelectorAll('[data-level]').forEach(b=>{const active=b.dataset.level===state.level;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active)})}
function renderInbox(){const messages=getMessages();const list=$('mailList');list.replaceChildren();$('mailCount').textContent=`/ ${String(messages.length).padStart(2,'0')}`;$('selectedCategory').textContent=(categories.find(c=>c.id===state.category)?.name||'All letters').toUpperCase();$('inboxCounter').textContent=`${String(messages.findIndex(m=>m.id===selectedMessage().id)+1).padStart(2,'0')} / ${String(messages.length).padStart(2,'0')}`;messages.forEach((m,i)=>{const b=make('button','mail-item'+(m.id===selectedMessage().id?' active':''));b.type='button';b.setAttribute('aria-current',m.id===selectedMessage().id?'true':'false');const avatar=make('div','mini-avatar',m.sender[0]);avatar.style.background=m.color;const content=make('div','mail-item-content');const top=make('div','mail-item-top');top.append(make('strong','',m.sender),make('time','',`#${String(i+1).padStart(2,'0')}`));content.append(top,make('div','mail-item-subject',m.subject),make('div','mail-item-preview',m.body.split('\n').find(x=>x.length>25)||m.body));const bottom=make('div','mail-item-bottom');bottom.append(make('span','tag',m.category.toUpperCase()));bottom.append(make('span',progress.completed[m.id]?'done-badge':'unread-dot',progress.completed[m.id]?'✓ DONE':''));content.append(bottom);b.append(avatar,content);b.addEventListener('click',()=>{state.selected=m.id;render()});list.append(b)})}
function renderLetter(){const m=selectedMessage();if(!m)return;state.selected=m.id;const cat=categories.find(c=>c.id===m.category);const n=getMessages().findIndex(x=>x.id===m.id)+1;$('crumbCategory').textContent=cat.name.toUpperCase();$('crumbNumber').textContent=`LETTER ${String(n).padStart(2,'0')}`;$('wordGoalTop').textContent=m.level+' LEVEL';$('senderAvatar').textContent=m.sender[0];$('senderAvatar').style.background=m.color;$('senderName').textContent=m.sender;$('senderEmail').textContent=m.sender.toLowerCase().replace(/[^a-z]/g,'')+'@lostletters.mail';$('letterSubject').textContent=m.subject;$('letterBody').textContent=m.body;$('letterTag').textContent=`✦ ${cat.name.toUpperCase()}`;$('letterIndex').textContent=`LETTER ${String(n).padStart(2,'0')} / ${String(getMessages().length).padStart(2,'0')}`;$('composeRecipient').textContent=m.sender.toUpperCase();$('replyText').value=drafts[m.id]||'';$('wordTarget').textContent=`/ TARGET ${levels[m.level].target}`;updateWordCount();renderGoals();$('hintList').replaceChildren(...hintsByLevel[m.level].map(x=>make('p','',x)));$('vocabList').replaceChildren(...vocabByCategory[m.category].map(([en,th])=>{const d=make('div','vocab-entry');d.append(make('strong','',en),make('span','',th));return d}));$('resultPanel').classList.add('hidden');renderSavedFeedback(m)}
function renderGoals(){const m=selectedMessage();const answer=$('replyText').value.toLowerCase();$('goalList').replaceChildren(...m.goals.map(g=>{const matched=g.terms.some(term=>answer.includes(term));const row=make('div','goal-row'+(matched?' matched':''));row.append(make('span','goal-check',matched?'✓':''),make('span','',g.label));return row}))}
function updateWordCount(){const n=countWords($('replyText').value);$('wordCount').textContent=n;$('wordCount').style.color=n>=levels[state.level].min&&n<=levels[state.level].max?'#4e9f7d':'#7354ae';renderGoals()}
function renderXp(){const xp=Math.max(0,Number(progress.xp)||0);const lvl=Math.floor(xp/100)+1;$('totalXp').textContent=xp;$('playerLevel').textContent=lvl;$('levelProgress').style.width=`${xp%100}%`;$('xpProgressText').textContent=`${xp%100} / 100 XP`}
function render(){renderCategories();renderLevels();renderInbox();renderLetter();renderXp()}
const reactionStyles={
  happy:{label:'ดีใจและมั่นใจ',color:'#ff812b',shade:'#d65a1e'},
  reassured:{label:'สบายใจขึ้น',color:'#ffd52a',shade:'#e8a52b'},
  confused:{label:'ยังสับสน',color:'#a9ce19',shade:'#77a52e'},
  worried:{label:'ยังกังวล',color:'#83c5f5',shade:'#439fd0'}
};
function estimateReaction(coverage,grammar,missed=[]){let feeling,reason;if(coverage>=20&&grammar>=36){feeling='happy';reason='คำตอบค่อนข้างชัดเจนและครอบคลุมสิ่งที่ถาม ผู้อ่านน่าจะสบายใจขึ้น'}else if(coverage>=15){feeling='reassured';reason='ผู้อ่านได้รับคำตอบบางส่วนและเห็นแนวทางต่อไป แต่อาจยังอยากได้รายละเอียดเพิ่ม'}else if(coverage>=8){feeling='confused';reason='ยังมีประเด็นสำคัญที่ไม่ชัด ผู้อ่านอาจต้องถามกลับเพื่อให้เข้าใจตรงกัน'}else{feeling='worried';reason='คำตอบยังไม่แตะสิ่งที่ผู้อ่านกังวล จึงอาจรู้สึกไม่มั่นใจว่าจะเกิดอะไรต่อ'}if(missed.length)reason+=' โดยเฉพาะเรื่อง '+missed.slice(0,2).join(', ');return {feeling,reason,source:'estimate'}}
function demoGrade(m,answer){const n=countWords(answer),lower=answer.toLowerCase();const hits=m.goals.map(g=>g.terms.some(t=>lower.includes(t)));const coverage=Math.round(25*hits.filter(Boolean).length/hits.length);const ratio=Math.min(1,n/levels[m.level].min);const languageUse=Math.round(9+16*ratio);const corrections=[];for(const [bad,good] of [['your contacting','Thank you for contacting us'],['immedieatly','immediately'],['i is','I am'],['we will checking','we will check'],["didn't received","didn't receive"]])if(lower.includes(bad))corrections.push({original:bad,suggestion:good});const grammar=Math.max(12,Math.round(31+15*ratio-6*corrections.length));const missed=m.goals.filter((_,i)=>!hits[i]).map(g=>g.label);return {mode:'demo',languageUse,grammar,coverage,summary:'คะแนนประมาณจากความยาว การครอบคลุมประเด็น และรูปแบบผิดที่ตรวจพบ เหมาะใช้ซ้อมก่อนรับผลจาก Ollama',strengths:['เริ่มตอบจดหมายและสื่อสารใจความหลักได้'],improvements:missed.length?['เพิ่มรายละเอียดให้ครบ: '+missed.join(', ')]:['ลองปรับประโยคให้ลื่นไหลและชัดเจนขึ้น'],corrections,modelAnswer:'',readerReaction:estimateReaction(coverage,grammar,missed),disclaimer:'Demo estimate — ไม่ใช่การตรวจโดย AI'}}
function drawPixelFace(canvas,feeling){const style=reactionStyles[feeling]||reactionStyles.confused;const ctx=canvas.getContext('2d');if(!ctx)return;ctx.clearRect(0,0,24,24);for(let y=1;y<23;y++)for(let x=1;x<23;x++){const distance=((x-11.5)/10.2)**2+((y-11.5)/10.2)**2;if(distance>1)continue;ctx.fillStyle=distance>.84?'#171523':(x<4||y>19?style.shade:style.color);ctx.fillRect(x,y,1,1)}ctx.fillStyle='#fff';ctx.fillRect(6,8,5,5);ctx.fillRect(14,8,5,5);ctx.fillStyle='#171523';ctx.fillRect(9,10,2,3);ctx.fillRect(14,10,2,3);if(feeling==='happy'){ctx.fillRect(6,16,1,2);ctx.fillRect(7,18,10,1);ctx.fillRect(17,16,1,2)}else if(feeling==='reassured'){ctx.fillRect(7,17,1,1);ctx.fillRect(8,18,8,1);ctx.fillRect(16,17,1,1)}else if(feeling==='confused'){for(const [x,y] of [[6,18],[7,17],[8,17],[9,18],[10,18],[11,17],[12,17],[13,18],[14,18],[15,17],[16,17],[17,18]])ctx.fillRect(x,y,1,1)}else{ctx.fillRect(7,19,1,1);ctx.fillRect(8,18,1,1);ctx.fillRect(9,17,6,1);ctx.fillRect(15,18,1,1);ctx.fillRect(16,19,1,1)}}
function renderReaction(result,message){const data=result.readerReaction||estimateReaction(result.coverage,result.grammar);const feeling=reactionStyles[data.feeling]?data.feeling:'confused';const style=reactionStyles[feeling];const card=make('section',`reader-reaction reaction-${feeling}`);const faceWrap=make('div','reaction-face');const canvas=make('canvas');canvas.width=24;canvas.height=24;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',`สีหน้าพิกเซล: ${style.label}`);faceWrap.append(canvas);const copy=make('div','reaction-copy');copy.append(make('div','eyebrow',`✦ READER REACTION · ${data.source==='ollama'?'OLLAMA AI':'DEMO ESTIMATE'}`),make('h3','',`${message.sender} อาจรู้สึก${style.label}`),make('p','',String(data.reason||'')),make('small','','เป็นการตีความจากคำตอบ ไม่ใช่ความรู้สึกจริงของบุคคล'));card.append(faceWrap,copy);drawPixelFace(canvas,feeling);return card}
async function checkStatus(){const label=$('connectionLabel'),lamp=$('statusLamp');label.textContent='Checking local AI...';lamp.classList.remove('live');try{const response=await fetch('/api/status',{cache:'no-store',signal:AbortSignal.timeout(5000)});if(!response.ok)throw Error('No backend');const data=await response.json();state.mode=data.mode==='ollama'?'ollama':'demo';state.model=data.model||null;if(state.mode==='ollama'){label.textContent=`OLLAMA CONNECTED · ${state.model}`;lamp.classList.add('live')}else{label.textContent=data.preferredModel&&data.models?.length?'DEMO · MODEL NOT FOUND':'DEMO MODE · OLLAMA OFFLINE'}}catch{state.mode='demo';state.model=null;label.textContent='DEMO MODE · LOCAL AI UNAVAILABLE'}$('gradeHint').textContent=state.mode==='ollama'?'AI grading is ready!':'Demo scores are practice estimates.'}
function renderSavedFeedback(message){
  const section=$('feedbackHistory');
  const entries=Array.isArray(feedbackHistory[message.id])?feedbackHistory[message.id]:[];
  section.replaceChildren();
  section.classList.toggle('hidden',entries.length===0);
  if(!entries.length)return;
  section.append(make('h3','','ผลตรวจที่บันทึกไว้'),make('p','','เลือกผลเก่าเพื่อดูคำแนะนำและคำที่ควรแก้'));
  const list=make('div','feedback-history-list');
  entries.forEach((entry,index)=>{
    const score=Number(entry.result?.languageUse||0)+Number(entry.result?.grammar||0)+Number(entry.result?.coverage||0);
    const date=new Date(entry.savedAt).toLocaleString('th-TH');
    const button=make('button','',`${entry.result?.mode==='ollama'?'AI':'Demo'} ${score}/100 · ${date}`);
    button.type='button';
    button.addEventListener('click',()=>{
      list.querySelectorAll('button').forEach(item=>item.classList.remove('active'));
      button.classList.add('active');
      renderResult(entry.result,message,{savedAt:entry.savedAt,answer:entry.answer});
    });
    if(index===0)button.classList.add('active');
    list.append(button);
  });
  section.append(list);
  renderResult(entries[0].result,message,{savedAt:entries[0].savedAt,answer:entries[0].answer,scroll:false});
}

function saveFeedback(message,answer,result){
  const previous=Array.isArray(feedbackHistory[message.id])?feedbackHistory[message.id]:[];
  feedbackHistory[message.id]=[{savedAt:new Date().toISOString(),answer,result},...previous].slice(0,10);
  save(feedbackKey,feedbackHistory);
}

function renderPairSection(panel,title,items,emptyText){
  const section=make('div','corrections');
  section.append(make('h3','helper-title',title));
  if(Array.isArray(items)&&items.length){
    items.slice(0,4).forEach(item=>{
      const row=make('div','feedback-pair');
      row.append(make('strong','',`${item.original||''} → ${item.suggestion||''}`));
      if(item.reason)row.append(make('small','',String(item.reason)));
      section.append(row);
    });
  }else section.append(make('p','feedback-empty',emptyText));
  panel.append(section);
}

function renderResult(result,message,options={}){
  const panel=$('resultPanel');
  panel.replaceChildren();
  panel.classList.remove('hidden');
  const total=result.languageUse+result.grammar+result.coverage;
  const head=make('div','result-head');
  const title=make('div');
  title.append(make('div','eyebrow','QUEST COMPLETE'),make('h2','',total>=70?'A lovely reply!':'Keep practicing!'));
  head.append(title,make('div','mode-pill'+(result.mode==='ollama'?' ai':''),result.mode==='ollama'?`OLLAMA AI · ${result.model||'LOCAL'}`:'DEMO ESTIMATE'));
  panel.append(head);
  const score=make('div','score-total',String(total));
  score.append(make('span','',' / 100 POINTS'));
  panel.append(score);
  const bars=make('div','score-bars');
  for(const [key,label,max] of [['languageUse','LANGUAGE USE',25],['grammar','GRAMMAR',50],['coverage','COVERAGE',25]]){
    const box=make('div','score-box');
    box.append(make('strong','',`${result[key]} / ${max}`),make('span','',label));
    const track=make('div','score-track');
    const fill=make('i');
    fill.style.width=`${Math.max(0,Math.min(100,100*result[key]/max))}%`;
    track.append(fill);
    box.append(track);
    bars.append(box);
  }
  panel.append(bars,renderReaction(result,message),make('p','feedback-summary',result.summary||''));
  if(options.savedAt)panel.append(make('p','saved-feedback-note',`บันทึกเมื่อ ${new Date(options.savedAt).toLocaleString('th-TH')}`));
  if(options.answer){
    const answer=make('div','feedback-detail');
    answer.append(make('strong','','คำตอบที่ตรวจ'),document.createTextNode('\n'+options.answer));
    panel.append(answer);
  }
  const grid=make('div','feedback-grid');
  for(const [heading,items] of [['คำแนะนำ: จุดที่ทำได้ดี',result.strengths],['คำแนะนำ: ควรพัฒนา',result.improvements]]){
    const section=make('div');
    section.append(make('h3','',heading));
    const list=make('ul');
    (Array.isArray(items)?items:[]).slice(0,4).forEach(item=>list.append(make('li','',String(item))));
    section.append(list);
    grid.append(section);
  }
  panel.append(grid);
  if(result.mode==='ollama'||(Array.isArray(result.corrections)&&result.corrections.length)){
    renderPairSection(panel,'ข้อผิดพลาดที่ควรแก้',result.corrections,'ไม่พบข้อผิดพลาดที่ชัดเจนในคำตอบนี้');
  }
  if(result.mode==='ollama'){
    renderPairSection(panel,'คำหรือสำนวนที่เหมาะกว่า',result.betterWords,'ไม่มีคำที่จำเป็นต้องเปลี่ยนในคำตอบนี้');
  }
  if(result.modelAnswer){
    const example=make('div','model-answer');
    example.append(make('h3','','EXAMPLE REPLY'),make('p','',result.modelAnswer));
    panel.append(example);
  }
  if(result.mode==='demo')panel.append(make('p','helper-muted',result.fallbackReason?`${result.disclaimer}. ${result.fallbackReason}`:result.disclaimer||'Demo estimate — not AI grading'));
  if(options.scroll!==false)panel.scrollIntoView({behavior:'smooth',block:'nearest'});
}

async function grade(){
  if(state.submitting)return;
  const message=selectedMessage(),answer=$('replyText').value.trim();
  if(answer.length<10){$('gradeHint').textContent='Write a little more before checking.';$('replyText').focus();return}
  state.submitting=true;
  $('gradeButton').disabled=true;
  $('gradeButton').textContent='✦ CHECKING...';
  let result;
  try{
    const response=await fetch('/api/grade',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message:{level:message.level,body:message.body,goals:message.goals},answer}),
      signal:AbortSignal.timeout(95000)
    });
    if(!response.ok)throw Error('Backend unavailable');
    result=await response.json();
    if(typeof result.languageUse!=='number')throw Error('Invalid response');
  }catch{
    result=demoGrade(message,answer);
    result.fallbackReason='Local backend unavailable.';
    state.mode='demo';state.model=null;
    $('connectionLabel').textContent='DEMO MODE · LOCAL AI UNAVAILABLE';
    $('statusLamp').classList.remove('live');
  }finally{
    state.submitting=false;
    $('gradeButton').disabled=false;
    $('gradeButton').innerHTML='<span>✦</span> CHECK MY REPLY <span>→</span>';
  }
  saveFeedback(message,answer,result);
  renderSavedFeedback(message);
  $('resultPanel').scrollIntoView({behavior:'smooth',block:'nearest'});
  if(!progress.completed[message.id]){
    const earned=Math.max(10,Math.round((result.languageUse+result.grammar+result.coverage)/5));
    progress.xp=(Number(progress.xp)||0)+earned;
    progress.completed[message.id]=true;
    save(progressKey,progress);
    renderXp();renderInbox();
    $('gradeHint').textContent=`+${earned} XP earned!`;
  }else $('gradeHint').textContent='Already completed · keep refining your reply';
  checkStatus();
}

document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>{state.level=b.dataset.level;state.selected=null;render()}));
$('replyText').addEventListener('input',()=>{drafts[selectedMessage().id]=$('replyText').value;save(draftsKey,drafts);updateWordCount();$('draftSaved').textContent='DRAFT SAVED LOCALLY'});
$('clearDraft').addEventListener('click',()=>{if(!$('replyText').value)return;delete drafts[selectedMessage().id];save(draftsKey,drafts);$('replyText').value='';$('resultPanel').classList.add('hidden');updateWordCount();$('replyText').focus()});
$('gradeButton').addEventListener('click',grade);
$('refreshStatus').addEventListener('click',checkStatus);
for(const [buttonId,listId,promptId] of [['toggleHints','hintList','hintPrompt'],['toggleVocab','vocabList','vocabPrompt']])$(buttonId).addEventListener('click',()=>{const show=$(listId).classList.toggle('hidden')===false;$(promptId).classList.toggle('hidden',show);$(buttonId).textContent=show?'HIDE −':'SHOW +';$(buttonId).setAttribute('aria-expanded',show)});
render();checkStatus();
