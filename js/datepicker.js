var Datepicker=function(){"use strict";function e(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function t(e){return e[e.length-1]}function i(e,...t){return t.forEach((t=>{e.includes(t)||e.push(t)})),e}function s(e,t){return e?e.split(t):[]}function n(e,t,i){return(void 0===t||e>=t)&&(void 0===i||e<=i)}function a(e,t,i){return e<t?t:e>i?i:e}function r(e,t,i={},s=0,n=""){n+=`<${Object.keys(i).reduce(((e,t)=>{let n=i[t];return"function"==typeof n&&(n=n(s)),`${e} ${t}="${n}"`}),e)}></${e}>`;const a=s+1;return a<t?r(e,t,i,a,n):n}function d(e){return e.replace(/>\s+/g,">").replace(/\s+</,"<")}function o(e){return new Date(e).setHours(0,0,0,0)}function c(){return(new Date).setHours(0,0,0,0)}function l(...e){switch(e.length){case 0:return c();case 1:return o(e[0])}const t=new Date(0);return t.setFullYear(...e),t.setHours(0,0,0,0)}function h(e,t){const i=new Date(e);return i.setDate(i.getDate()+t)}function u(e,t){const i=new Date(e),s=i.getMonth()+t;let n=s%12;n<0&&(n+=12);const a=i.setMonth(s);return i.getMonth()!==n?i.setDate(0):a}function f(e,t){const i=new Date(e),s=i.getMonth(),n=i.setFullYear(i.getFullYear()+t);return 1===s&&2===i.getMonth()?i.setDate(0):n}function p(e,t){return(e-t+7)%7}function g(e,t,i=0){const s=new Date(e).getDay();return h(e,p(t,i)-p(s,i))}function m(e,t){const i=new Date(e).getFullYear();return Math.floor(i/t)*t}function w(e,t,i){if(1!==t&&2!==t)return e;const s=new Date(e);return 1===t?i?s.setMonth(s.getMonth()+1,0):s.setDate(1):i?s.setFullYear(s.getFullYear()+1,0,0):s.setMonth(0,1),s.setHours(0,0,0,0)}const y=/dd?|DD?|mm?|MM?|yy?(?:yy)?/,D=/[\s!-/:-@[-`{-~年月日]+/;let v={};const b={y:(e,t)=>new Date(e).setFullYear(parseInt(t,10)),m(e,t,i){const s=new Date(e);let n=parseInt(t,10)-1;if(isNaN(n)){if(!t)return NaN;const e=t.toLowerCase(),s=t=>t.toLowerCase().startsWith(e);if(n=i.monthsShort.findIndex(s),n<0&&(n=i.months.findIndex(s)),n<0)return NaN}return s.setMonth(n),s.getMonth()!==x(n)?s.setDate(0):s.getTime()},d:(e,t)=>new Date(e).setDate(parseInt(t,10))},k={d:e=>e.getDate(),dd:e=>M(e.getDate(),2),D:(e,t)=>t.daysShort[e.getDay()],DD:(e,t)=>t.days[e.getDay()],m:e=>e.getMonth()+1,mm:e=>M(e.getMonth()+1,2),M:(e,t)=>t.monthsShort[e.getMonth()],MM:(e,t)=>t.months[e.getMonth()],y:e=>e.getFullYear(),yy:e=>M(e.getFullYear(),2).slice(-2),yyyy:e=>M(e.getFullYear(),4)};function x(e){return e>-1?e%12:x(e+12)}function M(e,t){return e.toString().padStart(t,"0")}function S(e){if("string"!=typeof e)throw new Error("Invalid date format.");if(e in v)return v[e];const i=e.split(y),s=e.match(new RegExp(y,"g"));if(0===i.length||!s)throw new Error("Invalid date format.");const n=s.map((e=>k[e])),a=Object.keys(b).reduce(((e,t)=>(s.find((e=>"D"!==e[0]&&e[0].toLowerCase()===t))&&e.push(t),e)),[]);return v[e]={parser(e,t){const i=e.split(D).reduce(((e,t,i)=>{if(t.length>0&&s[i]){const n=s[i][0];"M"===n?e.m=t:"D"!==n&&(e[n]=t)}return e}),{});return a.reduce(((e,s)=>{const n=b[s](e,i[s],t);return isNaN(n)?e:n}),c())},formatter:(e,s)=>n.reduce(((t,n,a)=>t+`${i[a]}${n(e,s)}`),"")+t(i)}}function C(e,t,i){if(e instanceof Date||"number"==typeof e){const t=o(e);return isNaN(t)?void 0:t}if(e){if("today"===e)return c();if(t&&t.toValue){const s=t.toValue(e,t,i);return isNaN(s)?void 0:o(s)}return S(t).parser(e,i)}}function O(e,t,i){if(isNaN(e)||!e&&0!==e)return"";const s="number"==typeof e?new Date(e):e;return t.toDisplay?t.toDisplay(s,t,i):S(t).formatter(s,i)}const E=document.createRange();function F(e){return E.createContextualFragment(e)}function V(e){return e.parentElement||(e.parentNode instanceof ShadowRoot?e.parentNode.host:void 0)}function N(e){return e.getRootNode().activeElement===e}function L(e){"none"!==e.style.display&&(e.style.display&&(e.dataset.styleDisplay=e.style.display),e.style.display="none")}function W(e){"none"===e.style.display&&(e.dataset.styleDisplay?(e.style.display=e.dataset.styleDisplay,delete e.dataset.styleDisplay):e.style.display="")}function B(e){e.firstChild&&(e.removeChild(e.firstChild),B(e))}const Y=new WeakMap,{addEventListener:A,removeEventListener:H}=EventTarget.prototype;function T(e,t){let i=Y.get(e);i||(i=[],Y.set(e,i)),t.forEach((e=>{A.call(...e),i.push(e)}))}if(!Event.prototype.composedPath){const e=(t,i=[])=>{let s;return i.push(t),t.parentNode?s=t.parentNode:t.host?s=t.host:t.defaultView&&(s=t.defaultView),s?e(s,i):i};Event.prototype.composedPath=function(){return e(this.target)}}function K(e,t,i){const[s,...n]=e;return t(s)?s:s!==i&&"HTML"!==s.tagName&&0!==n.length?K(n,t,i):void 0}function j(e,t){const i="function"==typeof t?t:e=>e instanceof Element&&e.matches(t);return K(e.composedPath(),i,e.currentTarget)}const $={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM y"}},_={autohide:!1,beforeShowDay:null,beforeShowDecade:null,beforeShowMonth:null,beforeShowYear:null,calendarWeeks:!1,clearBtn:!1,dateDelimiter:",",datesDisabled:[],daysOfWeekDisabled:[],daysOfWeekHighlighted:[],defaultViewDate:void 0,disableTouchKeyboard:!1,format:"mm/dd/yyyy",getCalendarWeek:null,language:"en",maxDate:null,maxNumberOfDates:1,maxView:3,minDate:null,nextArrow:"»",orientation:"auto",pickLevel:0,prevArrow:"«",showDaysOfWeek:!0,showOnClick:!0,showOnFocus:!0,startView:0,title:"",todayBtn:!1,todayBtnMode:0,todayHighlight:!1,updateOnBlur:!0,weekStart:0},{language:I,format:P,weekStart:R}=_;function q(e,t){return e.length<6&&t>=0&&t<7?i(e,t):e}function J(e){return(e+6)%7}function U(e,t,i,s){const n=C(e,t,i);return void 0!==n?n:s}function z(e,t,i=3){const s=parseInt(e,10);return s>=0&&s<=i?s:t}function X(t,s){const n=Object.assign({},t),a={},r=s.constructor.locales,d=s.rangeSideIndex;let{format:o,getCalendarWeek:c,language:h,locale:u,maxDate:f,maxView:p,minDate:g,pickLevel:m,startView:D,weekStart:v}=s.config||{};if(n.language){let e;if(n.language!==h&&(r[n.language]?e=n.language:(e=n.language.split("-")[0],void 0===r[e]&&(e=!1))),delete n.language,e){h=a.language=e;const t=u||r[I];u=Object.assign({format:P,weekStart:R},r[I]),h!==I&&Object.assign(u,r[h]),a.locale=u,o===t.format&&(o=a.format=u.format),v===t.weekStart&&(v=a.weekStart=u.weekStart,a.weekEnd=J(u.weekStart))}}if(n.format){const e="function"==typeof n.format.toDisplay,t="function"==typeof n.format.toValue,i=y.test(n.format);(e&&t||i)&&(o=a.format=n.format),delete n.format}let b=m;void 0!==n.pickLevel&&(b=z(n.pickLevel,2),delete n.pickLevel),b!==m&&(b>m&&(void 0===n.minDate&&(n.minDate=g),void 0===n.maxDate&&(n.maxDate=f)),n.datesDisabled||(n.datesDisabled=[]),m=a.pickLevel=b);let k=g,x=f;if(void 0!==n.minDate){const e=l(0,0,1);k=null===n.minDate?e:U(n.minDate,o,u,k),k!==e&&(k=w(k,m,!1)),delete n.minDate}if(void 0!==n.maxDate&&(x=null===n.maxDate?void 0:U(n.maxDate,o,u,x),void 0!==x&&(x=w(x,m,!0)),delete n.maxDate),x<k?(g=a.minDate=x,f=a.maxDate=k):(g!==k&&(g=a.minDate=k),f!==x&&(f=a.maxDate=x)),n.datesDisabled&&(a.datesDisabled=n.datesDisabled.reduce(((e,t)=>{const s=C(t,o,u);return void 0!==s?i(e,w(s,m,d)):e}),[]),delete n.datesDisabled),void 0!==n.defaultViewDate){const e=C(n.defaultViewDate,o,u);void 0!==e&&(a.defaultViewDate=e),delete n.defaultViewDate}if(void 0!==n.weekStart){const e=Number(n.weekStart)%7;isNaN(e)||(v=a.weekStart=e,a.weekEnd=J(e)),delete n.weekStart}if(n.daysOfWeekDisabled&&(a.daysOfWeekDisabled=n.daysOfWeekDisabled.reduce(q,[]),delete n.daysOfWeekDisabled),n.daysOfWeekHighlighted&&(a.daysOfWeekHighlighted=n.daysOfWeekHighlighted.reduce(q,[]),delete n.daysOfWeekHighlighted),void 0!==n.maxNumberOfDates){const e=parseInt(n.maxNumberOfDates,10);e>=0&&(a.maxNumberOfDates=e,a.multidate=1!==e),delete n.maxNumberOfDates}n.dateDelimiter&&(a.dateDelimiter=String(n.dateDelimiter),delete n.dateDelimiter);let M=p;void 0!==n.maxView&&(M=z(n.maxView,p),delete n.maxView),M=m>M?m:M,M!==p&&(p=a.maxView=M);let S=D;if(void 0!==n.startView&&(S=z(n.startView,S),delete n.startView),S<m?S=m:S>p&&(S=p),S!==D&&(a.startView=S),n.prevArrow){const e=F(n.prevArrow);e.childNodes.length>0&&(a.prevArrow=e.childNodes),delete n.prevArrow}if(n.nextArrow){const e=F(n.nextArrow);e.childNodes.length>0&&(a.nextArrow=e.childNodes),delete n.nextArrow}if(void 0!==n.disableTouchKeyboard&&(a.disableTouchKeyboard="ontouchstart"in document&&!!n.disableTouchKeyboard,delete n.disableTouchKeyboard),n.orientation){const e=n.orientation.toLowerCase().split(/\s+/g);a.orientation={x:e.find((e=>"left"===e||"right"===e))||"auto",y:e.find((e=>"top"===e||"bottom"===e))||"auto"},delete n.orientation}if(void 0!==n.todayBtnMode){switch(n.todayBtnMode){case 0:case 1:a.todayBtnMode=n.todayBtnMode}delete n.todayBtnMode}return a.getCalendarWeek="function"==typeof n.getCalendarWeek?n.getCalendarWeek:c||null,delete n.getCalendarWeek,Object.keys(n).forEach((t=>{void 0!==n[t]&&e(_,t)&&(a[t]=n[t])})),a}const G=d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),Q=d(`<div class="days">\n  <div class="days-of-week">${r("span",7,{class:"dow"})}</div>\n  <div class="datepicker-grid">${r("span",42)}</div>\n</div>`),Z=d(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${r("span",6,{class:"week"})}</div>\n</div>`);class ee{constructor(e,t){Object.assign(this,t,{picker:e,element:F('<div class="datepicker-view"></div>').firstChild,selected:[]}),this.init(this.picker.datepicker.config)}init(e){void 0!==e.pickLevel&&(this.isMinView=this.id===e.pickLevel),this.setOptions(e),this.updateFocus(),this.updateSelection()}performBeforeHook(e,t,s){let n=this.beforeShow(new Date(s));switch(typeof n){case"boolean":n={enabled:n};break;case"string":n={classes:n}}if(n){if(!1===n.enabled&&(e.classList.add("disabled"),i(this.disabled,t)),n.classes){const s=n.classes.split(/\s+/);e.classList.add(...s),s.includes("disabled")&&i(this.disabled,t)}n.content&&function(e,t){B(e),t instanceof DocumentFragment?e.appendChild(t):"string"==typeof t?e.appendChild(F(t)):"function"==typeof t.forEach&&t.forEach((t=>{e.appendChild(t)}))}(e,n.content)}}}class te extends ee{constructor(e){super(e,{id:0,name:"days",cellClass:"day"})}init(e,t=!0){if(t){const e=F(Q).firstChild;this.dow=e.firstChild,this.grid=e.lastChild,this.element.appendChild(e)}super.init(e)}setOptions(t){let i;if(e(t,"minDate")&&(this.minDate=t.minDate),e(t,"maxDate")&&(this.maxDate=t.maxDate),t.datesDisabled&&(this.datesDisabled=t.datesDisabled),t.daysOfWeekDisabled&&(this.daysOfWeekDisabled=t.daysOfWeekDisabled,i=!0),t.daysOfWeekHighlighted&&(this.daysOfWeekHighlighted=t.daysOfWeekHighlighted),void 0!==t.todayHighlight&&(this.todayHighlight=t.todayHighlight),void 0!==t.weekStart&&(this.weekStart=t.weekStart,this.weekEnd=t.weekEnd,i=!0),t.locale){const e=this.locale=t.locale;this.dayNames=e.daysMin,this.switchLabelFormat=e.titleFormat,i=!0}if(void 0!==t.beforeShowDay&&(this.beforeShow="function"==typeof t.beforeShowDay?t.beforeShowDay:void 0),void 0!==t.calendarWeeks)if(t.calendarWeeks&&!this.calendarWeeks){const e=F(Z).firstChild;this.calendarWeeks={element:e,dow:e.firstChild,weeks:e.lastChild},this.element.insertBefore(e,this.element.firstChild)}else this.calendarWeeks&&!t.calendarWeeks&&(this.element.removeChild(this.calendarWeeks.element),this.calendarWeeks=null);"function"==typeof t.getCalendarWeek&&(this.getCalendarWeek=t.getCalendarWeek),void 0!==t.showDaysOfWeek&&(t.showDaysOfWeek?(W(this.dow),this.calendarWeeks&&W(this.calendarWeeks.dow)):(L(this.dow),this.calendarWeeks&&L(this.calendarWeeks.dow))),i&&Array.from(this.dow.children).forEach(((e,t)=>{const i=(this.weekStart+t)%7;e.textContent=this.dayNames[i],e.className=this.daysOfWeekDisabled.includes(i)?"dow disabled":"dow"}))}updateFocus(){const e=new Date(this.picker.viewDate),t=e.getFullYear(),i=e.getMonth(),s=l(t,i,1),n=g(s,this.weekStart,this.weekStart);this.first=s,this.last=l(t,i+1,0),this.start=n,this.focused=this.picker.viewDate}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e,t&&(this.range=t.dates)}render(){this.today=this.todayHighlight?c():void 0,this.disabled=[...this.datesDisabled];const e=O(this.focused,this.switchLabelFormat,this.locale);if(this.picker.setViewSwitchLabel(e),this.picker.setPrevBtnDisabled(this.first<=this.minDate),this.picker.setNextBtnDisabled(this.last>=this.maxDate),this.calendarWeeks){const e=g(this.first,1,this.weekStart),t=(e,t)=>this.getCalendarWeek?this.getCalendarWeek(new Date(e),t):function(e){const t=g(e,4,1),i=g(new Date(t).setMonth(0,4),4,1);return Math.round((t-i)/6048e5)+1}(e);Array.from(this.calendarWeeks.weeks.children).forEach(((i,s)=>{i.textContent=t(h(e,7*s),this.weekStart)}))}Array.from(this.grid.children).forEach(((e,t)=>{const s=e.classList,n=h(this.start,t),a=new Date(n),r=a.getDay();if(e.className=`datepicker-cell ${this.cellClass}`,e.dataset.date=n,e.textContent=a.getDate(),n<this.first?s.add("prev"):n>this.last&&s.add("next"),this.today===n&&s.add("today"),(n<this.minDate||n>this.maxDate||this.disabled.includes(n))&&s.add("disabled"),this.daysOfWeekDisabled.includes(r)&&(s.add("disabled"),i(this.disabled,n)),this.daysOfWeekHighlighted.includes(r)&&s.add("highlighted"),this.range){const[e,t]=this.range;n>e&&n<t&&s.add("range"),n===e&&s.add("range-start"),n===t&&s.add("range-end")}this.selected.includes(n)&&s.add("selected"),n===this.focused&&s.add("focused"),this.beforeShow&&this.performBeforeHook(e,n,n)}))}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((i=>{const s=Number(i.dataset.date),n=i.classList;s>e&&s<t&&n.add("range"),s===e&&n.add("range-start"),s===t&&n.add("range-end"),this.selected.includes(s)&&n.add("selected"),s===this.focused&&n.add("focused")}))}refreshFocus(){const e=Math.round((this.focused-this.start)/864e5);this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[e].classList.add("focused")}}function ie(e,t){if(!e||!e[0]||!e[1])return;const[[i,s],[n,a]]=e;return i>t||n<t?void 0:[i===t?s:-1,n===t?a:12]}class se extends ee{constructor(e){super(e,{id:1,name:"months",cellClass:"month"})}init(e,t=!0){t&&(this.grid=this.element,this.element.classList.add("months","datepicker-grid"),this.grid.appendChild(F(r("span",12,{"data-month":e=>e})))),super.init(e)}setOptions(t){if(t.locale&&(this.monthNames=t.locale.monthsShort),e(t,"minDate"))if(void 0===t.minDate)this.minYear=this.minMonth=this.minDate=void 0;else{const e=new Date(t.minDate);this.minYear=e.getFullYear(),this.minMonth=e.getMonth(),this.minDate=e.setDate(1)}if(e(t,"maxDate"))if(void 0===t.maxDate)this.maxYear=this.maxMonth=this.maxDate=void 0;else{const e=new Date(t.maxDate);this.maxYear=e.getFullYear(),this.maxMonth=e.getMonth(),this.maxDate=l(this.maxYear,this.maxMonth+1,0)}this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t.beforeShowMonth&&(this.beforeShow="function"==typeof t.beforeShowMonth?t.beforeShowMonth:void 0)}updateFocus(){const e=new Date(this.picker.viewDate);this.year=e.getFullYear(),this.focused=e.getMonth()}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce(((e,t)=>{const s=new Date(t),n=s.getFullYear(),a=s.getMonth();return void 0===e[n]?e[n]=[a]:i(e[n],a),e}),{}),t&&t.dates&&(this.range=t.dates.map((e=>{const t=new Date(e);return isNaN(t)?void 0:[t.getFullYear(),t.getMonth()]})))}render(){this.disabled=this.datesDisabled.reduce(((e,t)=>{const i=new Date(t);return this.year===i.getFullYear()&&e.push(i.getMonth()),e}),[]),this.picker.setViewSwitchLabel(this.year),this.picker.setPrevBtnDisabled(this.year<=this.minYear),this.picker.setNextBtnDisabled(this.year>=this.maxYear);const e=this.selected[this.year]||[],t=this.year<this.minYear||this.year>this.maxYear,i=this.year===this.minYear,s=this.year===this.maxYear,n=ie(this.range,this.year);Array.from(this.grid.children).forEach(((a,r)=>{const d=a.classList,o=l(this.year,r,1);if(a.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(a.dataset.date=o),a.textContent=this.monthNames[r],(t||i&&r<this.minMonth||s&&r>this.maxMonth||this.disabled.includes(r))&&d.add("disabled"),n){const[e,t]=n;r>e&&r<t&&d.add("range"),r===e&&d.add("range-start"),r===t&&d.add("range-end")}e.includes(r)&&d.add("selected"),r===this.focused&&d.add("focused"),this.beforeShow&&this.performBeforeHook(a,r,o)}))}refresh(){const e=this.selected[this.year]||[],[t,i]=ie(this.range,this.year)||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach(((s,n)=>{const a=s.classList;n>t&&n<i&&a.add("range"),n===t&&a.add("range-start"),n===i&&a.add("range-end"),e.includes(n)&&a.add("selected"),n===this.focused&&a.add("focused")}))}refreshFocus(){this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[this.focused].classList.add("focused")}}class ne extends ee{constructor(e,t){super(e,t)}init(e,t=!0){var i;t&&(this.navStep=10*this.step,this.beforeShowOption=`beforeShow${i=this.cellClass,[...i].reduce(((e,t,i)=>e+(i?t:t.toUpperCase())),"")}`,this.grid=this.element,this.element.classList.add(this.name,"datepicker-grid"),this.grid.appendChild(F(r("span",12)))),super.init(e)}setOptions(t){if(e(t,"minDate")&&(void 0===t.minDate?this.minYear=this.minDate=void 0:(this.minYear=m(t.minDate,this.step),this.minDate=l(this.minYear,0,1))),e(t,"maxDate")&&(void 0===t.maxDate?this.maxYear=this.maxDate=void 0:(this.maxYear=m(t.maxDate,this.step),this.maxDate=l(this.maxYear,11,31))),this.isMinView?t.datesDisabled&&(this.datesDisabled=t.datesDisabled):this.datesDisabled=[],void 0!==t[this.beforeShowOption]){const e=t[this.beforeShowOption];this.beforeShow="function"==typeof e?e:void 0}}updateFocus(){const e=new Date(this.picker.viewDate),t=m(e,this.navStep),i=t+9*this.step;this.first=t,this.last=i,this.start=t-this.step,this.focused=m(e,this.step)}updateSelection(){const{dates:e,rangepicker:t}=this.picker.datepicker;this.selected=e.reduce(((e,t)=>i(e,m(t,this.step))),[]),t&&t.dates&&(this.range=t.dates.map((e=>{if(void 0!==e)return m(e,this.step)})))}render(){this.disabled=this.datesDisabled.map((e=>new Date(e).getFullYear())),this.picker.setViewSwitchLabel(`${this.first}-${this.last}`),this.picker.setPrevBtnDisabled(this.first<=this.minYear),this.picker.setNextBtnDisabled(this.last>=this.maxYear),Array.from(this.grid.children).forEach(((e,t)=>{const i=e.classList,s=this.start+t*this.step,n=l(s,0,1);if(e.className=`datepicker-cell ${this.cellClass}`,this.isMinView&&(e.dataset.date=n),e.textContent=e.dataset.year=s,0===t?i.add("prev"):11===t&&i.add("next"),(s<this.minYear||s>this.maxYear||this.disabled.includes(s))&&i.add("disabled"),this.range){const[e,t]=this.range;s>e&&s<t&&i.add("range"),s===e&&i.add("range-start"),s===t&&i.add("range-end")}this.selected.includes(s)&&i.add("selected"),s===this.focused&&i.add("focused"),this.beforeShow&&this.performBeforeHook(e,s,n)}))}refresh(){const[e,t]=this.range||[];this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach((e=>{e.classList.remove("range","range-start","range-end","selected","focused")})),Array.from(this.grid.children).forEach((i=>{const s=Number(i.textContent),n=i.classList;s>e&&s<t&&n.add("range"),s===e&&n.add("range-start"),s===t&&n.add("range-end"),this.selected.includes(s)&&n.add("selected"),s===this.focused&&n.add("focused")}))}refreshFocus(){const e=Math.round((this.focused-this.start)/this.step);this.grid.querySelectorAll(".focused").forEach((e=>{e.classList.remove("focused")})),this.grid.children[e].classList.add("focused")}}function ae(e,t){const i={date:e.getDate(),viewDate:new Date(e.picker.viewDate),viewId:e.picker.currentView.id,datepicker:e};e.element.dispatchEvent(new CustomEvent(t,{detail:i}))}function re(e,t){const{minDate:i,maxDate:s}=e.config,{currentView:n,viewDate:r}=e.picker;let d;switch(n.id){case 0:d=u(r,t);break;case 1:d=f(r,t);break;default:d=f(r,t*n.navStep)}d=a(d,i,s),e.picker.changeFocus(d).render()}function de(e){const t=e.picker.currentView.id;t!==e.config.maxView&&e.picker.changeView(t+1).render()}function oe(e){e.config.updateOnBlur?e.update({revert:!0}):e.refresh("input"),e.hide()}function ce(e,t){const i=e.picker,s=new Date(i.viewDate),n=i.currentView.id,a=1===n?u(s,t-s.getMonth()):f(s,t-s.getFullYear());i.changeFocus(a).changeView(n-1).render()}function le(e){const t=e.picker,i=c();if(1===e.config.todayBtnMode){if(e.config.autohide)return void e.setDate(i);e.setDate(i,{render:!1}),t.update()}t.viewDate!==i&&t.changeFocus(i),t.changeView(0).render()}function he(e){e.setDate({clear:!0})}function ue(e){de(e)}function fe(e){re(e,-1)}function pe(e){re(e,1)}function ge(e,t){const i=j(t,".datepicker-cell");if(!i||i.classList.contains("disabled"))return;const{id:s,isMinView:n}=e.picker.currentView;n?e.setDate(Number(i.dataset.date)):ce(e,Number(1===s?i.dataset.month:i.dataset.year))}function me(e){e.preventDefault()}const we=["left","top","right","bottom"].reduce(((e,t)=>(e[t]=`datepicker-orient-${t}`,e)),{}),ye=e=>e?`${e}px`:e;function De(t,i){if(void 0!==i.title&&(i.title?(t.controls.title.textContent=i.title,W(t.controls.title)):(t.controls.title.textContent="",L(t.controls.title))),i.prevArrow){const e=t.controls.prevBtn;B(e),i.prevArrow.forEach((t=>{e.appendChild(t.cloneNode(!0))}))}if(i.nextArrow){const e=t.controls.nextBtn;B(e),i.nextArrow.forEach((t=>{e.appendChild(t.cloneNode(!0))}))}if(i.locale&&(t.controls.todayBtn.textContent=i.locale.today,t.controls.clearBtn.textContent=i.locale.clear),void 0!==i.todayBtn&&(i.todayBtn?W(t.controls.todayBtn):L(t.controls.todayBtn)),e(i,"minDate")||e(i,"maxDate")){const{minDate:e,maxDate:i}=t.datepicker.config;t.controls.todayBtn.disabled=!n(c(),e,i)}void 0!==i.clearBtn&&(i.clearBtn?W(t.controls.clearBtn):L(t.controls.clearBtn))}function ve(e){const{dates:i,config:s}=e;return a(i.length>0?t(i):s.defaultViewDate,s.minDate,s.maxDate)}function be(e,t){const i=new Date(e.viewDate),s=new Date(t),{id:n,year:a,first:r,last:d}=e.currentView,o=s.getFullYear();switch(e.viewDate=t,o!==i.getFullYear()&&ae(e.datepicker,"changeYear"),s.getMonth()!==i.getMonth()&&ae(e.datepicker,"changeMonth"),n){case 0:return t<r||t>d;case 1:return o!==a;default:return o<r||o>d}}function ke(e){return window.getComputedStyle(e).direction}function xe(e){const t=V(e);if(t!==document.body&&t)return"visible"!==window.getComputedStyle(t).overflow?t:xe(t)}class Me{constructor(e){const{config:t}=this.datepicker=e,i=G.replace(/%buttonClass%/g,t.buttonClass),s=this.element=F(i).firstChild,[n,a,r]=s.firstChild.children,d=n.firstElementChild,[o,c,l]=n.lastElementChild.children,[h,u]=r.firstChild.children,f={title:d,prevBtn:o,viewSwitch:c,nextBtn:l,todayBtn:h,clearBtn:u};this.main=a,this.controls=f;const p=e.inline?"inline":"dropdown";s.classList.add(`datepicker-${p}`),De(this,t),this.viewDate=ve(e),T(e,[[s,"mousedown",me],[a,"click",ge.bind(null,e)],[f.viewSwitch,"click",ue.bind(null,e)],[f.prevBtn,"click",fe.bind(null,e)],[f.nextBtn,"click",pe.bind(null,e)],[f.todayBtn,"click",le.bind(null,e)],[f.clearBtn,"click",he.bind(null,e)]]),this.views=[new te(this),new se(this),new ne(this,{id:2,name:"years",cellClass:"year",step:1}),new ne(this,{id:3,name:"decades",cellClass:"decade",step:10})],this.currentView=this.views[t.startView],this.currentView.render(),this.main.appendChild(this.currentView.element),t.container?t.container.appendChild(this.element):e.inputField.after(this.element)}setOptions(e){De(this,e),this.views.forEach((t=>{t.init(e,!1)})),this.currentView.render()}detach(){this.element.remove()}show(){if(this.active)return;const{datepicker:e,element:t}=this;if(e.inline)t.classList.add("active");else{const i=ke(e.inputField);i!==ke(V(t))?t.dir=i:t.dir&&t.removeAttribute("dir"),t.style.visiblity="hidden",t.classList.add("active"),this.place(),t.style.visiblity="",e.config.disableTouchKeyboard&&e.inputField.blur()}this.active=!0,ae(e,"show")}hide(){this.active&&(this.datepicker.exitEditMode(),this.element.classList.remove("active"),this.active=!1,ae(this.datepicker,"hide"))}place(){const{classList:e,offsetParent:t,style:i}=this.element,{config:s,inputField:n}=this.datepicker,{width:a,height:r}=this.element.getBoundingClientRect(),{left:d,top:o,right:c,bottom:l,width:h,height:u}=n.getBoundingClientRect();let{x:f,y:p}=s.orientation,g=d,m=o;if(t!==document.body&&t){const e=t.getBoundingClientRect();g-=e.left-t.scrollLeft,m-=e.top-t.scrollTop}else g+=window.scrollX,m+=window.scrollY;const w=xe(n);let y=0,D=0,{clientWidth:v,clientHeight:b}=document.documentElement;if(w){const e=w.getBoundingClientRect();e.top>0&&(D=e.top),e.left>0&&(y=e.left),e.right<v&&(v=e.right),e.bottom<b&&(b=e.bottom)}let k=0;"auto"===f&&(d<y?(f="left",k=y-d):d+a>v?(f="right",v<c&&(k=v-c)):f="rtl"===ke(n)?c-a<y?"left":"right":"left"),"right"===f&&(g+=h-a),g+=k,"auto"===p&&(p=o-r>D&&l+r>b?"top":"bottom"),"top"===p?m-=r:m+=u,e.remove(...Object.values(we)),e.add(we[f],we[p]),i.left=ye(g),i.top=ye(m)}setViewSwitchLabel(e){this.controls.viewSwitch.textContent=e}setPrevBtnDisabled(e){this.controls.prevBtn.disabled=e}setNextBtnDisabled(e){this.controls.nextBtn.disabled=e}changeView(e){const t=this.currentView,i=this.views[e];return i.id!==t.id&&(this.currentView=i,this._renderMethod="render",ae(this.datepicker,"changeView"),this.main.replaceChild(i.element,t.element)),this}changeFocus(e){return this._renderMethod=be(this,e)?"render":"refreshFocus",this.views.forEach((e=>{e.updateFocus()})),this}update(){const e=ve(this.datepicker);return this._renderMethod=be(this,e)?"render":"refresh",this.views.forEach((e=>{e.updateFocus(),e.updateSelection()})),this}render(e=!0){const t=e&&this._renderMethod||"render";delete this._renderMethod,this.currentView[t]()}}function Se(e,t,i,s,a,r){if(n(e,a,r)){if(s(e)){return Se(t(e,i),t,i,s,a,r)}return e}}function Ce(e,t,i,s){const n=e.picker,a=n.currentView,r=a.step||1;let d,o,c=n.viewDate;switch(a.id){case 0:c=s?h(c,7*i):t.ctrlKey||t.metaKey?f(c,i):h(c,i),d=h,o=e=>a.disabled.includes(e);break;case 1:c=u(c,s?4*i:i),d=u,o=e=>{const t=new Date(e),{year:i,disabled:s}=a;return t.getFullYear()===i&&s.includes(t.getMonth())};break;default:c=f(c,i*(s?4:1)*r),d=f,o=e=>a.disabled.includes(m(e,r))}c=Se(c,d,i<0?-r:r,o,a.minDate,a.maxDate),void 0!==c&&n.changeFocus(c).render()}function Oe(e,t){const i=t.key;if("Tab"===i)return void oe(e);const s=e.picker,{id:n,isMinView:a}=s.currentView;if(s.active){if(e.editMode)return void("Enter"===i?e.exitEditMode({update:!0,autohide:e.config.autohide}):"Escape"===i&&s.hide());if("ArrowLeft"===i)if(t.ctrlKey||t.metaKey)re(e,-1);else{if(t.shiftKey)return void e.enterEditMode();Ce(e,t,-1,!1)}else if("ArrowRight"===i)if(t.ctrlKey||t.metaKey)re(e,1);else{if(t.shiftKey)return void e.enterEditMode();Ce(e,t,1,!1)}else if("ArrowUp"===i)if(t.ctrlKey||t.metaKey)de(e);else{if(t.shiftKey)return void e.enterEditMode();Ce(e,t,-1,!0)}else if("ArrowDown"===i){if(t.shiftKey&&!t.ctrlKey&&!t.metaKey)return void e.enterEditMode();Ce(e,t,1,!0)}else{if("Enter"!==i)return void("Escape"===i?s.hide():"Backspace"!==i&&"Delete"!==i&&(1!==i.length||t.ctrlKey||t.metaKey)||e.enterEditMode());if(a)return void e.setDate(s.viewDate);s.changeView(n-1).render()}}else{if("ArrowDown"!==i)return void("Enter"===i?e.update():"Escape"===i&&s.show());s.show()}t.preventDefault()}function Ee(e){e.config.showOnFocus&&!e._showing&&e.show()}function Fe(e,t){const i=t.target;(e.picker.active||e.config.showOnClick)&&(i._active=N(i),i._clicking=setTimeout((()=>{delete i._active,delete i._clicking}),2e3))}function Ve(e,t){const i=t.target;i._clicking&&(clearTimeout(i._clicking),delete i._clicking,i._active&&e.enterEditMode(),delete i._active,e.config.showOnClick&&e.show())}function Ne(e,t){t.clipboardData.types.includes("text/plain")&&e.enterEditMode()}function Le(e,t){const{element:i,picker:s}=e;if(!s.active&&!N(i))return;const n=s.element;j(t,(e=>e===i||e===n))||oe(e)}function We(e,t){return e.map((e=>O(e,t.format,t.locale))).join(t.dateDelimiter)}function Be(e,t,i=!1){const{config:s,dates:a,rangeSideIndex:r}=e;if(0===t.length)return i?[]:void 0;let d=t.reduce(((e,t)=>{let i=C(t,s.format,s.locale);return void 0===i||(i=w(i,s.pickLevel,r),!n(i,s.minDate,s.maxDate)||e.includes(i)||s.datesDisabled.includes(i)||!(s.pickLevel>0)&&s.daysOfWeekDisabled.includes(new Date(i).getDay())||e.push(i)),e}),[]);return 0!==d.length?(s.multidate&&!i&&(d=d.reduce(((e,t)=>(a.includes(t)||e.push(t),e)),a.filter((e=>!d.includes(e))))),s.maxNumberOfDates&&d.length>s.maxNumberOfDates?d.slice(-1*s.maxNumberOfDates):d):void 0}function Ye(e,t=3,i=!0){const{config:s,picker:n,inputField:a}=e;if(2&t){const e=n.active?s.pickLevel:s.startView;n.update().changeView(e).render(i)}1&t&&a&&(a.value=We(e.dates,s))}function Ae(e,t,i){let{clear:s,render:n,autohide:a,revert:r}=i;void 0===n&&(n=!0),n?void 0===a&&(a=e.config.autohide):a=!1;const d=Be(e,t,s);(d||r)&&(d&&d.toString()!==e.dates.toString()?(e.dates=d,Ye(e,n?3:1),ae(e,"changeDate")):Ye(e,1),a&&e.hide())}return class{constructor(e,t={},i){e.datepicker=this,this.element=e;const n=this.config=Object.assign({buttonClass:t.buttonClass&&String(t.buttonClass)||"button",container:null,defaultViewDate:c(),maxDate:void 0,minDate:void 0},X(_,this)),a=this.inline="INPUT"!==e.tagName;let r,d;if(a?n.container=e:(t.container&&(n.container=t.container instanceof HTMLElement?t.container:document.querySelector(t.container)),r=this.inputField=e,r.classList.add("datepicker-input")),i){const e=i.inputs.indexOf(r),t=i.datepickers;if(e<0||e>1||!Array.isArray(t))throw Error("Invalid rangepicker object.");t[e]=this,Object.defineProperty(this,"rangepicker",{get:()=>i}),Object.defineProperty(this,"rangeSideIndex",{get:()=>e})}this._options=t,Object.assign(n,X(t,this)),a?(d=s(e.dataset.date,n.dateDelimiter),delete e.dataset.date):d=s(r.value,n.dateDelimiter),this.dates=[];const o=Be(this,d);o&&o.length>0&&(this.dates=o),r&&(r.value=We(this.dates,n));const l=this.picker=new Me(this);if(a)this.show();else{const e=Le.bind(null,this);T(this,[[r,"keydown",Oe.bind(null,this)],[r,"focus",Ee.bind(null,this)],[r,"mousedown",Fe.bind(null,this)],[r,"click",Ve.bind(null,this)],[r,"paste",Ne.bind(null,this)],[document,"mousedown",e],[document,"touchstart",e],[window,"resize",l.place.bind(l)]])}}static formatDate(e,t,i){return O(e,t,i&&$[i]||$.en)}static parseDate(e,t,i){return C(e,t,i&&$[i]||$.en)}static get locales(){return $}get active(){return!(!this.picker||!this.picker.active)}get pickerElement(){return this.picker?this.picker.element:void 0}setOptions(e){const t=this.picker,i=X(e,this);Object.assign(this._options,e),Object.assign(this.config,i),t.setOptions(i),Ye(this,3)}show(){if(this.inputField){if(this.inputField.disabled)return;N(this.inputField)||this.config.disableTouchKeyboard||(this._showing=!0,this.inputField.focus(),delete this._showing)}this.picker.show()}hide(){this.inline||(this.picker.hide(),this.picker.update().changeView(this.config.startView).render())}destroy(){return this.hide(),function(e){let t=Y.get(e);t&&(t.forEach((e=>{H.call(...e)})),Y.delete(e))}(this),this.picker.detach(),this.inline||this.inputField.classList.remove("datepicker-input"),delete this.element.datepicker,this}getDate(e){const t=e?t=>O(t,e,this.config.locale):e=>new Date(e);return this.config.multidate?this.dates.map(t):this.dates.length>0?t(this.dates[0]):void 0}setDate(...e){const i=[...e],s={},n=t(e);"object"!=typeof n||Array.isArray(n)||n instanceof Date||!n||Object.assign(s,i.pop());Ae(this,Array.isArray(i[0])?i[0]:i,s)}update(e){if(this.inline)return;const t=Object.assign(e||{},{clear:!0,render:!0});Ae(this,s(this.inputField.value,this.config.dateDelimiter),t)}refresh(e,t=!1){let i;e&&"string"!=typeof e&&(t=e,e=void 0),i="picker"===e?2:"input"===e?1:3,Ye(this,i,!t)}enterEditMode(){this.inline||!this.picker.active||this.editMode||(this.editMode=!0,this.inputField.classList.add("in-edit"))}exitEditMode(e){if(this.inline||!this.editMode)return;const t=Object.assign({update:!1},e);delete this.editMode,this.inputField.classList.remove("in-edit"),t.update&&this.update(t)}}}();