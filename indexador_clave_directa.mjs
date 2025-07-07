import fs from 'fs';
import path from 'path';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from '@langchain/openai';
import { FaissStore } from '@langchain/community/vectorstores/faiss';

const openaiKey = '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';

const loader = new PDFLoader('./Condicionados Generales/generali/hogar/CONDICIONADO HOGAR GENERALI.pdf');
const rawDocs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 100 });
const docs = await splitter.splitDocuments(rawDocs);

const embeddings = new OpenAIEmbeddings({ openAIApiKey: openaiKey });
const store = await FaissStore.fromDocuments(docs, embeddings);

await store.save(path.join('./data', 'faiss_index'));
console.log('✅ Índice FAISS generado correctamente.');