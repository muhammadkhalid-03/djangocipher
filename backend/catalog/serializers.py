from rest_framework import serializers
from .models import Catalog, Contact, ScrambledText

class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        fields = ['id', 'text']


class ScrambledTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrambledText
        fields = ['id', 'scrambled_text']

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message']