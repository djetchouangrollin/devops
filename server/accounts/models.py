from django.db import models
from django.contrib.auth.models import User

class Experience(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titre du poste")
    company = models.CharField(max_length=200, verbose_name="Entreprise")
    start_date = models.DateField(verbose_name="Date de début")
    end_date = models.DateField(null=True, blank=True, verbose_name="Date de fin")
    description = models.TextField(verbose_name="Description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Expérience"
        verbose_name_plural = "Expériences"
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.title} chez {self.company}"

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Titre du projet")
    description = models.TextField(verbose_name="Description")
    technologies = models.CharField(max_length=200, verbose_name="Technologies utilisées")
    image = models.ImageField(upload_to='projects/', null=True, blank=True, verbose_name="Image")
    github_link = models.URLField(null=True, blank=True, verbose_name="Lien GitHub")
    live_link = models.URLField(null=True, blank=True, verbose_name="Lien du projet")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Projet"
        verbose_name_plural = "Projets"
        ordering = ['-created_at']

    def __str__(self):
        return self.title

class Formation(models.Model):
    title = models.CharField(max_length=200, verbose_name="Diplôme/Formation")
    institution = models.CharField(max_length=200, verbose_name="Établissement")
    start_date = models.DateField(verbose_name="Date de début")
    end_date = models.DateField(null=True, blank=True, verbose_name="Date de fin")
    description = models.TextField(verbose_name="Description")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Formation"
        verbose_name_plural = "Formations"
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.title} - {self.institution}"
