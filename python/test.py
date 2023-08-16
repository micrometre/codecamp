import matplotlib
import numpy
import pandas
import scipy

"""
print(numpy.__version__)
print(numpy.__version__)
print(pandas.__version__)
print(matplotlib.__version__)
print(scipy.__version__)

"""



def my_function():
  print("Hello from a function")


def my_function(fname):
  print(fname + " Refsnes")



def my_function(fname, lname):
  print(fname, lname)


my_function("Emil", "Refsnes")
