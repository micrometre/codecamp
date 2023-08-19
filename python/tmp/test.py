import numpy as np
import pandas as pd # importing pandas as pd




df = pd.read_csv('./public/data/weight-height.csv')

heights = df['Height'] # this is now a series


print(heights)
