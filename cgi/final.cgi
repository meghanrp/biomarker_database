#!/usr/local/bin/python3

import cgi, json
import os
import mysql.connector

print("Content-Type: application/json\n\n")

form = cgi.FieldStorage()

search_term = form.getvalue('search_query')

conn = mysql.connector.connect(user='mpatte44', password = 'Milkshake121308$', host='localhost', database='mpatte44')

curs = conn.cursor()

qry = "SELECT geneNum, geneHash, proteinNum, proteinHash, biomarker, gene, protein, proteinSeq, drug, canonical, disease, geneURL, proteinURL, drugSVG, drugInfo FROM biomarkersDB WHERE biomarker LIKE CONCAT ('%', %s, '%')"

curs.execute(qry, (search_term, ))

results = { 'match_count': 0, 'matches': list() }
for (geneNum, geneHash, proteinNum, proteinHash, biomarker, gene, protein, proteinSeq, drug, canonical, disease, geneURL, proteinURL, drugSVG, drugInfo) in curs:
    results['matches'].append({'geneNum': f'{geneNum}', 'geneHash': f'{geneHash}', 'proteinNum': f'{proteinNum}', 'proteinHash': f'{proteinHash}', 'biomarker': biomarker, 'gene': gene, 'protein': protein, 'proteinSeq': proteinSeq, 'drug': drug, 'canonical' : canonical, 'disease': disease, 'geneURL': f"{geneURL}", 'proteinURL': f"{proteinURL}", 'drugSVG': f"{drugSVG}", 'drugInfo': f"{drugInfo}"})
    results['match_count'] += 1

conn.close()

print(json.dumps(results))
