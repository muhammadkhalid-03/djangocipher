from rest_framework import routers
from .viewsets import CatalogViewSet, ContactViewSet, ScrambledTextViewSet

router = routers.SimpleRouter()
router.register(r'catalog', CatalogViewSet, basename="catalog")
router.register(r'scrambled', ScrambledTextViewSet, basename="scrambledtext")
router.register(r'contact', ContactViewSet, basename="contact")