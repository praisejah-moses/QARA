import os
import sys
import openai


import secret
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.indexes import VectorstoreIndexCreator



os.environ['OPENAI_API_KEY'] = secret.API_KEY

query = sys.argv[1]

loader = TextLoader('../data/knowlege-base.txt')
index = VectorstoreIndexCreator().from_loaders([loader])

print(index.query(query))
