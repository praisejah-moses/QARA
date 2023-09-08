import os
import sys
import openai


import secret
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.indexes import VectorstoreIndexCreator



os.environ['OPENAI_API_KEY'] = secret.API_KEY
def get_response(prompt):
    query = prompt

    loader = TextLoader('knowlege-base.txt')
    index = VectorstoreIndexCreator().from_loaders([loader])

    return(index.query(query))