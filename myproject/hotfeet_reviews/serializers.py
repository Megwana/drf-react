from rest_framework import serializers
from .models import Shoe, Review, Category, Brand

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['id', 'name']