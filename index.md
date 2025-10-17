# 👋 Hi, I'm {{ site.author.name }}

{{ site.about }}

---

## 🧠 Skills
{% for skill in site.skills %}
- **{{ skill.name }}:** {{ skill.details }}
{% endfor %}

---

## 🚀 Featured Projects
{% for project in site.projects %}
- [**{{ project.name }}**]({{ project.link }}) — {{ project.description }}
{% endfor %}

---

## 📈 Quick Stats
{% for stat in site.stats %}
**{{ stat.title }}:** {{ stat.value }}  
{% endfor %}

---

📫 **Connect with me:**  
[LinkedIn]({{ site.author.linkedin }}) | [GitHub]({{ site.author.github }})
