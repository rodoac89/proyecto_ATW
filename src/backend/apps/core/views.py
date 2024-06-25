from django.shortcuts import render
from apps.core.models import Persona

def index(request):
    template_name = "index.html"
    context = {}    
    context["saludo"] = Persona.objects.get(pk=1)
    return render(request, template_name, context)