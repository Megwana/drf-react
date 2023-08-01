from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
        
class Shoe(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)  # Assume the price is in USD for simplicity.
    image_url = models.URLField()  # To store the link of the shoe's image

    def __str__(self):
        return self.name

class Review(models.Model):
    RATING_CHOICES = [(i, i) for i in range(1, 6)]  # Ratings from 1 to 5

    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField()

    def __str__(self):
        return f"{self.user.username}'s review of {self.shoe.name}"

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['shoe', 'user'], name='unique_review')
        ]


