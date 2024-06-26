from rest_framework import serializers
from apps.core.models import Persona


class PersonaSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nombre = serializers.CharField() 
    class Meta:
        model = Persona 