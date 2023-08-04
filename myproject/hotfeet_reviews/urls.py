from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ShoeViewSet, ReviewViewSet, CategoryViewSet, BrandViewSet

router = DefaultRouter()
router.register(r'shoes', ShoeViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'brands', BrandViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
