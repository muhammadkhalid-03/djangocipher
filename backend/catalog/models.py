from django.db import models

# Create your models here.

class Catalog(models.Model):
    text = models.TextField()
    
    def __str__(self):
        return self.text
    
class ScrambledText(models.Model):
    scrambled_text = models.TextField()

    def __str__(self):
        return self.scrambled_text
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    