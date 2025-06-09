from rest_framework import serializers
from .models import Experience, Project, Formation

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class FormationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formation
        fields = '__all__' 