from rest_framework import serializers
from apps.core.models import Saludo


class SaludoSerializer(serializers.Serializer):
    nombre = serializers.CharField() 
    class Meta:
        model = Saludo 