from rest_framework import viewsets
from .models import Shoe, Review, Category, Brand
from .serializers import ShoeSerializer, ReviewSerializer, CategorySerializer, BrandSerializer

class ShoeViewSet(viewsets.ModelViewSet):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
