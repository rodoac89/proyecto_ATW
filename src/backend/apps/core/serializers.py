from rest_framework import serializers
from apps.core.models import Persona


class PersonaSerializer(serializers.Serializer):
    nombre = serializers.CharField() 
    class Meta:
        model = Persona 