from django.urls import path
from api.core.apiviews import Persona, ListPersona
urlpatterns = [
    
    path('post/Persona/', Persona.as_view()),
    path('get/Persona/<persona_id>/', Persona.as_view()),
    path('get/Personas/', ListPersona.as_view()),


]
