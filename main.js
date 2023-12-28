(()=>{"use strict";class t{constructor(){this.projects=[]}getProjects(){return this.projects}setProjects(t){this.projects=t}getProject(t){return this.projects.find((e=>e.getName()===t))}isInProjects(t){return this.projects.some((e=>e.getName()===t))}addProject(t){this.isInProjects(t.getName())||this.projects.push(t)}deleteProject(t){this.projects=this.projects.filter((e=>e.getName()!==t))}}class e{constructor(t){this.name=t,this.tasks=[]}getName(){return this.name}setName(t){this.name=t}getTasks(){return this.tasks}setTasks(t){this.tasks=t}getTask(t){return this.tasks.find((e=>e.getTitle()===t))}isInTasks(t){return this.tasks.some((e=>e.getTitle()===t))}addTask(t){this.isInTasks(t.getTitle())||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.getTitle()!==t))}}class s{constructor(t,e,s){this.title=t,this.description=e,this.dueDate=s,this.isComplete=!1}getTitle(){return this.title}setTitle(t){this.title=t}getDescription(){return this.description}setDescription(t){this.description=t}getDueDate(){return this.dueDate}setDueDate(t){this.dueDate=t}getIsComplete(){return this.isComplete}setIsComplete(t){this.isComplete=t}}class i{static saveList(t){localStorage.setItem("list",JSON.stringify(t))}static getList(){let i=Object.assign(new t,JSON.parse(localStorage.getItem("list")));return i.setProjects(i.getProjects().map((t=>Object.assign(new e,t)))),i.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new s,t)))))),i}static addProject(t){let e=this.getList();e.addProject(t),this.saveList(e)}static deleteProject(t){let e=this.getList();e.deleteProject(t),this.saveList(e)}static setProjectName(t,e){let s=this.getList();s.getProject(t).setName(e),this.saveList(s)}static addTask(t,e){let s=this.getList();s.getProject(t).addTask(e),this.saveList(s)}static deleteTask(t,e){let s=this.getList();s.getProject(t).deleteTask(e),this.saveList(s)}static setTaskTitle(t,e,s){let i=this.getList();i.getProject(t).getTask(e).setTitle(s),this.saveList(i)}static setTaskDescription(t,e,s){let i=this.getList();i.getProject(t).getTask(e).setDescription(s),this.saveList(i)}static setTaskDueDate(t,e,s){let i=this.getList();i.getProject(t).getTask(e).setDueDate(s),this.saveList(i)}static setTaskIsComplete(t,e,s){let i=this.getList();i.getProject(t).getTask(e).setIsComplete(s),this.saveList(i)}}function c(){let t=o.getActiveTask();const e=document.getElementById("content");let s;document.body.contains(document.querySelector(".task-container"))?(s=document.querySelector(".task-container"),s.textContent=""):(s=document.createElement("div"),s.classList.add("task-container"));const i=document.createElement("h2");i.classList.add("task-title"),i.textContent=t.getTitle();const c=document.createElement("p");c.classList.add("task-description"),c.textContent=t.getDescription();const a=document.createElement("p");a.classList.add("task-due-date"),a.textContent=t.getDueDate();const n=document.createElement("div");n.classList.add("task-actions");const d=document.createElement("input");d.setAttribute("type","checkbox"),d.classList.add("task-complete-box"),t.getIsComplete()?(i.classList.add("task-complete"),d.checked=!0):(d.checked=!1,i.classList.add("task-incomplete"));const r=document.createElement("button");r.classList.add("edit-task-btn");const l=document.createElement("img");l.src="./icons/edit.svg",l.alt="Edit task",l.title="Edit task",r.appendChild(l);const m=document.createElement("button");m.classList.add("save-edit-btn");const p=document.createElement("img");p.src="./icons/check.svg",p.alt="Save changes",p.title="Save changes",m.appendChild(p);const u=document.createElement("button");u.classList.add("del-task-btn");const h=document.createElement("img");h.src="./icons/delete.svg",h.alt="Delete task",h.title="Delete task",u.appendChild(h),d.addEventListener("change",(()=>{o.isTaskComplete()?d.checked=!0:d.checked=!1})),r.addEventListener("click",(()=>{r.style.display="none",u.style.display="none",k.style.display="none",i.contentEditable=!0,c.contentEditable=!0,a.contentEditable=!0,i.focus(),n.appendChild(m)})),m.addEventListener("click",(()=>{console.log(t.getTitle()),o.editActiveTask(t.getTitle(),i.textContent,c.textContent,a.textContent)})),u.addEventListener("click",(()=>{o.deleteActiveTask()}));const k=document.createElement("div");k.classList.add("task-complete-container"),k.appendChild(d),n.appendChild(k),n.appendChild(r),n.appendChild(u),s.appendChild(i),s.appendChild(c),s.appendChild(a),s.appendChild(n),e.appendChild(s)}class a{constructor(){this.taskForm=document.createElement("form")}resetTaskForm(){this.taskForm.style.display="none",this.taskForm.reset(),this.taskForm.children[3].textContent=""}addTaskToProject(){let t=this.taskForm.title.value,e=this.taskForm.description.value,c=this.taskForm.dueDate.value;if(o.validateDueDate(c)){{let a=new s(t,e,c),o=document.querySelector(".project-name").textContent;i.addTask(o,a),n()}this.resetTaskForm()}else this.taskForm.children[3].textContent="*Please enter a valid due date: yyyy/mm/dd"}createTaskForm(){this.taskForm.setAttribute("id","task-form"),this.taskForm.setAttribute("action","''"),this.taskForm.setAttribute("method","get");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","title"),t.setAttribute("id","title"),t.setAttribute("placeholder","title"),t.required=!0;const e=document.createElement("textarea");e.setAttribute("name","description"),e.setAttribute("id","description"),e.setAttribute("placeholder","description"),e.required=!0;const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","dueDate"),s.setAttribute("id","dueDate"),s.setAttribute("placeholder","yyyy/mm/dd"),s.required=!0;const i=document.createElement("p");i.setAttribute("id","date-error");const c=document.createElement("button");return c.setAttribute("type","submit"),c.textContent="Submit",this.taskForm.appendChild(t),this.taskForm.appendChild(e),this.taskForm.appendChild(s),this.taskForm.appendChild(i),this.taskForm.appendChild(c),this.taskForm.style.display="none",this.taskForm.addEventListener("submit",(t=>{t.preventDefault(),this.addTaskToProject()})),this.taskForm}}function n(){let t=o.getActiveProject();const e=document.getElementById("content");let s;if(document.body.contains(document.querySelector(".project-container"))){if(s=document.querySelector(".project-container"),s.textContent="",document.body.contains(document.querySelector(".task-container"))){let t=document.querySelector(".task-container");e.removeChild(t)}}else s=document.createElement("div"),s.classList.add("project-container");const i=document.createElement("div");i.classList.add("project-header");const c=document.createElement("h1");c.classList.add("project-name"),c.textContent=t.getName();const n=o.getTasksRemaining();n.classList.add("tasks-remaining");const d=o.getTaskList();d.classList.add("task-list");const r=(new a).createTaskForm(),l=document.createElement("button");l.classList.add("add-task-btn");const m=document.createElement("span");m.textContent="Add task";const p=document.createElement("img");p.src="./icons/add.svg",p.alt="plus sign",l.appendChild(p),l.appendChild(m);const u=document.createElement("div");u.classList.add("project-actions");const h=document.createElement("button");h.classList.add("edit-project-btn");const k=document.createElement("img");k.src="./icons/edit.svg",k.alt="Edit project",k.title="Edit project",h.appendChild(k);const g=document.createElement("button");g.classList.add("save-edit-btn");const v=document.createElement("img");v.src="./icons/check.svg",v.alt="Save changes",v.title="Save changes",g.appendChild(v);const j=document.createElement("button");j.classList.add("del-project-btn");const C=document.createElement("img");C.src="./icons/delete.svg",C.alt="Delete project",C.title="Delete project",j.appendChild(C);const L=document.createElement("button");L.textContent="Clear completed tasks",L.classList.add("clear-completed-btn"),l.addEventListener("click",(()=>{r.style.display="block"})),h.addEventListener("click",(()=>{h.style.display="none",j.style.display="none",L.style.display="none",l.style.display="none",c.contentEditable=!0,c.focus(),u.appendChild(g)})),g.addEventListener("click",(()=>{c.contentEditable=!1,o.editActiveProject(t.getName(),c.textContent)})),j.addEventListener("click",(()=>{o.deleteActiveProject()})),L.addEventListener("click",(()=>{o.clearCompletedTasks()})),i.appendChild(c),i.appendChild(n),u.appendChild(h),u.appendChild(j),u.appendChild(L),s.appendChild(i),s.appendChild(d),s.appendChild(l),s.appendChild(u),s.appendChild(r),e.appendChild(s)}class o{static getActiveTitle(){return document.querySelector(".active-task").textContent}static getActiveName(){return document.querySelector(".active-project").textContent}static getActiveTask(){return i.getList().getProject(this.getActiveName()).getTask(this.getActiveTitle())}static getActiveProject(){return i.getList().getProject(this.getActiveName())}static editActiveTask(t,e,s,c){let a=this.getActiveName();i.setTaskDescription(a,t,s),i.setTaskDueDate(a,t,c),i.setTaskTitle(a,t,e),n()}static deleteActiveTask(){i.deleteTask(this.getActiveName(),this.getActiveTitle()),n()}static editActiveProject(t,e){i.setProjectName(t,e),r()}static deleteActiveProject(){i.deleteProject(this.getActiveName()),r()}static getProjectList(){let t=i.getList().getProjects();const e=document.createElement("div");for(let s=0;s<t.length;s++){let i=t[s];const c=document.createElement("button");c.textContent=i.getName(),c.addEventListener("click",(()=>{document.body.contains(document.querySelector(".active-project"))&&document.querySelector(".active-project").classList.remove("active-project"),c.classList.add("active-project"),n()})),e.appendChild(c)}return e}static getTaskList(){let t=this.getActiveProject().getTasks();const e=document.createElement("div");for(let s=0;s<t.length;s++){let i=t[s];const a=document.createElement("button");a.textContent=i.getTitle(),!0===i.getIsComplete()&&a.classList.add("task-complete"),a.addEventListener("click",(()=>{document.body.contains(document.querySelector(".active-task"))&&document.querySelector(".active-task").classList.remove("active-task"),a.classList.add("active-task"),c()})),e.appendChild(a)}return e}static getTasksRemaining(){let t=this.getActiveProject().getTasks(),e=t.length,s=t.filter((t=>!t.getIsComplete())).length;const i=document.createElement("p");return i.textContent=0===e?"No tasks assigned":0===s?"All tasks are complete!":1===s?s+" task remaining":s+" tasks remaining",i}static updateTasksRemaining(){let t=document.querySelector(".tasks-remaining"),e=this.getTasksRemaining();t.textContent=e.textContent}static isTaskComplete(){let t=document.querySelector(".active-task"),e=document.querySelector(".task-title");return t.classList.contains("task-incomplete")?(t.classList.remove("task-incomplete"),e.classList.remove("task-incomplete"),t.classList.add("task-complete"),e.classList.add("task-complete"),i.setTaskIsComplete(this.getActiveName(),this.getActiveTitle(),!0),this.updateTasksRemaining(),!0):(t.classList.remove("task-complete"),e.classList.remove("task-complete"),t.classList.add("task-incomplete"),e.classList.add("task-incomplete"),i.setTaskIsComplete(this.getActiveName(),this.getActiveTitle(),!1),this.updateTasksRemaining(),!1)}static clearCompletedTasks(){let t=this.getActiveProject().getTasks().filter((t=>t.getIsComplete()));for(let e=0;e<t.length;e++){let s=t[e];i.deleteTask(this.getActiveName(),s.getTitle()),n()}}static validateDueDate(t){let e=new Date,s=new Date(t);return!(isNaN(s)||s<e)}}class d{constructor(){this.projectForm=document.createElement("form")}resetProjectForm(){this.projectForm.style.display="none",this.projectForm.reset()}addProjectToList(){let t=this.projectForm.name.value,s=new e(t);i.addProject(s),r(),this.resetProjectForm()}createProjectForm(){this.projectForm.setAttribute("id","project-form"),this.projectForm.setAttribute("action","''"),this.projectForm.setAttribute("method","get");const t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("name","name"),t.setAttribute("id","name"),t.setAttribute("placeholder","project name"),t.required=!0;const e=document.createElement("button");return e.setAttribute("type","submit"),e.textContent="Submit",this.projectForm.appendChild(t),this.projectForm.appendChild(e),this.projectForm.style.display="none",this.projectForm.addEventListener("submit",(t=>{t.preventDefault(),this.addProjectToList()})),this.projectForm}}function r(){const t=document.getElementById("content");let e;if(document.body.contains(document.querySelector(".list-container"))){if(e=document.querySelector(".list-container"),e.textContent="",document.body.contains(document.querySelector(".project-container"))){let e=document.querySelector(".project-container");t.removeChild(e)}if(document.body.contains(document.querySelector(".task-container"))){let e=document.querySelector(".task-container");t.removeChild(e)}}else e=document.createElement("div"),e.classList.add("list-container");const s=document.createElement("h1");s.classList.add("list-header"),s.textContent="Projects";const i=o.getProjectList();i.classList.add("project-list");const c=(new d).createProjectForm(),a=document.createElement("button");a.classList.add("add-project-btn");const n=document.createElement("span");n.textContent="Add project";const r=document.createElement("img");r.src="./icons/add.svg",r.alt="plus sign",a.appendChild(r),a.appendChild(n),a.addEventListener("click",(()=>{c.style.display="block"})),e.appendChild(s),e.appendChild(i),e.appendChild(a),e.appendChild(c),t.appendChild(e)}r()})();