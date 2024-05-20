# Biological Biomarker Database
<img width="1359" alt="Screenshot 2023-12-18 at 2 36 20 PM" src="https://github.com/meghanpatterson/Bioinformatics-Final-Project/assets/147774394/d3aa60d5-333a-4be5-aa3a-95472d03b126">

**ABOUT**
<br>
An interactive database for identifying and analyzing biomarkers and pertinent gene, protein, pharmacological, and structural information. When using the database, the user will be able to view the following properties associated with a biomarker in the database:
1. Gene (Hyperlink available)
2. Protein Name (Hyperlink available)
3. Protein Sequence (Cut to clipboard available)
4. Drug Name (Hyperlink available)
5. Canonical SMILES (Cut to clipboard available)
6. Drug Structure (Image available)
7. Disease/Research Area

Source code can be found at: http://bfx3.aap.jhu.edu/mpatte44/final

Interactive database can be found at the following link: http://bfx3.aap.jhu.edu/mpatte44/final/final.html

This database is viewable when access is permitted to the class server.

**REQUIREMENTS**
<br>
This database has been tested on both Safari and Chrome browsers. Output on other browsers (i.e. Windows) has not been tested. Safari is recommended to view the optimal CSS styling. Chrome is recommended to consistently view all functionality offered (i.e. autocomplete). The autocomplete feature does not always work with Safari; it is recommended to clear cache/cookies as a potential troubleshooting resolution.

No specific downloads required to view the database. Storage usage is trivial; data may be stored to Clipboard depending on if the function is utilized in the database.

**USAGE**
<br>
1. Proceed to the database by utilizing the following link: http://bfx3.aap.jhu.edu/mpatte44/final/final.html

2. Enter a term in the search box. The search box has autocomplete functionality, and a term should be selected from the drop-down list. Click on the 'Submit' button after the term is entered.

3. Results will be automatically populated into a table that appears upon clicking 'Submit'. A numerical value above the table will showcase the number of matches found. A value of '0' indicates that there are no matches corresponding to the entered search term in the database.

4. The values in the 'Gene', 'Protein Name', and 'Drug Name' cells are all hyperlinks. Click on each link to be redirected to a different database with focused information on that specific feature (e.g. clicking on the 'Protein Name' hyperlink will redirect the user to UniProt or GenBank for more detailed information on the protein itself). Click on the 'Cut To Clipboard' buttons to copy the protein sequence and/or canonical SMILES sequence to the Clipboard.

5. For additional searching, enter a new term in the search box. The results table will automatically repopulate with the new data based on the term submitted.

**DEMO**
<br>
Demo data is currently unavailable.

The following steps can be taken to test that the database is functioning properly:

1. Access the database at: http://bfx3.aap.jhu.edu/mpatte44/final/final.html

2. Enter the term 'esr' in the search box and click 'Submit'.

3. The search found a total of 25 matches to this biomarker in the database, based on the submitted 'esr' term.

4. Click on the 'ESR1' hyperlink in the 'Gene' column for focused information on this gene in an outside database, click on the 'Estrogen receptor' hyperlink in the 'Protein Name' column for additional information from an outside database, and click on the 'Abemaciclib' hyperlink in the 'Drug Name' column for additional information from an outside database. Click on the 'Cut To Clipboard' buttons to copy the protein sequence for the estrogen receptor protein or the canonical SMILES sequence to the Abemaciclib drug to the Clipboard.

**MISCELLANEOUS**
<br>
The database is comprised of data pulled from sources including ChEMBL, GenBank, UniProt, DrugBank, and the FDA. 

Many of the drugs are still considered to be experimental, in active phases of clinical trial(s), and/or have not been extensively studied. Some of the data is not extensive for some of the drugs because of such. The following are placeholders for missing data in the pharmacological portion of the table.
        - Drug Structure: A benzene ring indicates that the drug structure is not yet available.
        - Canonical SMILES: [*Drug name here*] indicates that the canonical SMILES are not yet available. 
