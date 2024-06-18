from rest_framework import serializers
from apps.core.models import Saludo


class SaludoSerializer(serializers.Serializer):
    class Meta:
        model = Saludo 