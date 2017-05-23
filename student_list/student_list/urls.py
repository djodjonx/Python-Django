from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from students.viewSet import StudentViewSet
from .viewSet import UserViewSet

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'students',StudentViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^$', include('students.urls')),
    url(r'^admin/$', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
