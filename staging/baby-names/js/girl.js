window.onload = function() {
    var quoteSpan     = document.getElementById("quoteText");
    var submitButton  = document.getElementById('submit');
    var oldQuoteIndex = -1;
    var newQuoteIndex = -1;
    var quotes        = [
		{'text': 'Aadhya'},{'text': 'Aaliyah'},{'text': 'Abby'},{'text': 'Abigail'},{'text': 'Abril'},{'text': 'Ada'},{'text': 'Adaline'},{'text': 'Adalyn'},{'text': 'Adalynn'},{'text': 'Addilyn'},{'text': 'Addilynn'},{'text': 'Addison'},{'text': 'Addisyn'},{'text': 'Addyson'},{'text': 'Adelaide'},{'text': 'Adele'},{'text': 'Adelina'},{'text': 'Adeline'},{'text': 'Adelyn'},{'text': 'Adelynn'},{'text': 'Adilynn'},{'text': 'Adley'},{'text': 'Adriana'},{'text': 'Adrianna'},{'text': 'Adrienne'},{'text': 'Ailani'},{'text': 'Aileen'},{'text': 'Ainsley'},{'text': 'Aisha'},{'text': 'Aitana'},{'text': 'Aiyana'},{'text': 'Alaia'},{'text': 'Alaina'},{'text': 'Alana'},{'text': 'Alani'},{'text': 'Alanna'},{'text': 'Alannah'},{'text': 'Alaya'},{'text': 'Alayah'},{'text': 'Alayna'},{'text': 'Aleah'},{'text': 'Aleena'},{'text': 'Alejandra'},{'text': 'Alena'},{'text': 'Alessandra'},{'text': 'Alessia'},{'text': 'Alexa'},{'text': 'Alexandra'},{'text': 'Alexandria'},{'text': 'Alexia'},{'text': 'Alexis'},{'text': 'Alia'},{'text': 'Aliana'},{'text': 'Alice'},{'text': 'Alicia'},{'text': 'Alina'},{'text': 'Alisa'},{'text': 'Alisha'},{'text': 'Alison'},{'text': 'Alivia'},{'text': 'Aliya'},{'text': 'Aliyah'},{'text': 'Aliza'},{'text': 'Allie'},{'text': 'Allison'},{'text': 'Allyson'},{'text': 'Alma'},{'text': 'Alondra'},{'text': 'Alora'},{'text': 'Alyson'},{'text': 'Alyssa'},{'text': 'Amalia'},{'text': 'Amanda'},{'text': 'Amani'},{'text': 'Amara'},{'text': 'Amari'},{'text': 'Amaris'},{'text': 'Amaya'},{'text': 'Amayah'},{'text': 'Amber'},{'text': 'Amelia'},{'text': 'Amelie'},{'text': 'Amia'},{'text': 'Amina'},{'text': 'Aminah'},{'text': 'Amira'},{'text': 'Amirah'},{'text': 'Amiya'},{'text': 'Amiyah'},{'text': 'Amora'},{'text': 'Amy'},{'text': 'Ana'},{'text': 'Anabelle'},{'text': 'Anahi'},{'text': 'Analia'},{'text': 'Anastasia'},{'text': 'Anaya'},{'text': 'Andi'},{'text': 'Andrea'},{'text': 'Angel'},{'text': 'Angela'},{'text': 'Angelica'},{'text': 'Angelina'},{'text': 'Angelique'},{'text': 'Angie'},{'text': 'Anika'},{'text': 'Aniya'},{'text': 'Aniyah'},{'text': 'Anna'},{'text': 'Annabel'},{'text': 'Annabella'},{'text': 'Annabelle'},{'text': 'Annalee'},{'text': 'Annalise'},{'text': 'Anne'},{'text': 'Annie'},{'text': 'Annika'},{'text': 'Ansley'},{'text': 'Antonella'},{'text': 'Anya'},{'text': 'April'},{'text': 'Arabella'},{'text': 'Aranza'},{'text': 'Arely'},{'text': 'Ari'},{'text': 'Aria'},{'text': 'Ariadne'},{'text': 'Ariah'},{'text': 'Ariana'},{'text': 'Arianna'},{'text': 'Ariel'},{'text': 'Ariella'},{'text': 'Arielle'},{'text': 'Ariya'},{'text': 'Ariyah'},{'text': 'Armani'},{'text': 'Arya'},{'text': 'Aryanna'},{'text': 'Ashley'},{'text': 'Ashlyn'},{'text': 'Ashlynn'},{'text': 'Aspen'},{'text': 'Astrid'},{'text': 'Athena'},{'text': 'Aubree'},{'text': 'Aubrey'},{'text': 'Aubrie'},{'text': 'Aubriella'},{'text': 'Aubrielle'},{'text': 'Audrey'},{'text': 'Audrina'},{'text': 'Aurelia'},{'text': 'Aurora'},{'text': 'Autumn'},{'text': 'Ava'},{'text': 'Avah'},{'text': 'Avalyn'},{'text': 'Avalynn'},{'text': 'Averi'},{'text': 'Averie'},{'text': 'Avery'},{'text': 'Aviana'},{'text': 'Avianna'},{'text': 'Aya'},{'text': 'Ayla'},{'text': 'Ayleen'},{'text': 'Aylin'},{'text': 'Azalea'},{'text': 'Azariah'},{'text': 'Bailee'},{'text': 'Bailey'},{'text': 'Barbara'},{'text': 'Baylee'},{'text': 'Beatrice'},{'text': 'Belen'},{'text': 'Bella'},{'text': 'Belle'},{'text': 'Bethany'},{'text': 'Bexley'},{'text': 'Bianca'},{'text': 'Blair'},{'text': 'Blaire'},{'text': 'Blake'},{'text': 'Blakely'},{'text': 'Bonnie'},{'text': 'Braelyn'},{'text': 'Braelynn'},{'text': 'Braylee'},{'text': 'Breanna'},{'text': 'Brenda'},{'text': 'Brenna'},{'text': 'Bria'},{'text': 'Briana'},{'text': 'Brianna'},{'text': 'Briar'},{'text': 'Bridget'},{'text': 'Briella'},{'text': 'Brielle'},{'text': 'Brinley'},{'text': 'Bristol'},{'text': 'Brittany'},{'text': 'Brooke'},{'text': 'Brooklyn'},{'text': 'Brooklynn'},{'text': 'Brylee'},{'text': 'Brynlee'},{'text': 'Brynn'},{'text': 'Cadence'},{'text': 'Cali'},{'text': 'Callie'},{'text': 'Calliope'},{'text': 'Cameron'},{'text': 'Camila'},{'text': 'Camilla'},{'text': 'Camille'},{'text': 'Camryn'},{'text': 'Cara'},{'text': 'Carla'},{'text': 'Carlee'},{'text': 'Carly'},{'text': 'Carmen'},{'text': 'Carolina'},{'text': 'Caroline'},{'text': 'Carolyn'},{'text': 'Carter'},{'text': 'Casey'},{'text': 'Cassandra'},{'text': 'Cassidy'},{'text': 'Cataleya'},{'text': 'Catalina'},{'text': 'Catherine'},{'text': 'Caylee'},{'text': 'Cecelia'},{'text': 'Cecilia'},{'text': 'Celeste'},{'text': 'Celia'},{'text': 'Celine'},{'text': 'Chana'},{'text': 'Chanel'},{'text': 'Charlee'},{'text': 'Charleigh'},{'text': 'Charley'},{'text': 'Charli'},{'text': 'Charlie'},{'text': 'Charlotte'},{'text': 'Chaya'},{'text': 'Chelsea'},{'text': 'Cheyenne'},{'text': 'Chloe'},{'text': 'Christina'},{'text': 'Christine'},{'text': 'Claire'},{'text': 'Clara'},{'text': 'Clare'},{'text': 'Clarissa'},{'text': 'Claudia'},{'text': 'Clementine'},{'text': 'Colette'},{'text': 'Collins'},{'text': 'Cora'},{'text': 'Coraline'},{'text': 'Corinne'},{'text': 'Courtney'},{'text': 'Crystal'},{'text': 'Cynthia'},{'text': 'Dahlia'},{'text': 'Daisy'},{'text': 'Dakota'},{'text': 'Dalary'},{'text': 'Daleyza'},{'text': 'Dallas'},{'text': 'Dana'},{'text': 'Danica'},{'text': 'Daniela'},{'text': 'Daniella'},{'text': 'Danielle'},{'text': 'Danna'},{'text': 'Daphne'},{'text': 'Davina'},{'text': 'Dayana'},{'text': 'Deborah'},{'text': 'Delaney'},{'text': 'Delilah'},{'text': 'Demi'},{'text': 'Desiree'},{'text': 'Destiny'},{'text': 'Diana'},{'text': 'Dorothy'},{'text': 'Dream'},{'text': 'Dulce'},{'text': 'Dylan'},{'text': 'Eden'},{'text': 'Edith'},{'text': 'Egypt'},{'text': 'Eileen'},{'text': 'Elaina'},{'text': 'Elaine'},{'text': 'Eleanor'},{'text': 'Elena'},{'text': 'Eliana'},{'text': 'Elianna'},{'text': 'Elisa'},{'text': 'Elisabeth'},{'text': 'Elise'},{'text': 'Eliza'},{'text': 'Elizabeth'},{'text': 'Ella'},{'text': 'Elle'},{'text': 'Ellen'},{'text': 'Elliana'},{'text': 'Ellianna'},{'text': 'Ellie'},{'text': 'Elliot'},{'text': 'Elliott'},{'text': 'Ellis'},{'text': 'Ellison'},{'text': 'Eloise'},{'text': 'Elora'},{'text': 'Elsa'},{'text': 'Elsie'},{'text': 'Elyse'},{'text': 'Ember'},{'text': 'Emberly'},{'text': 'Emelia'},{'text': 'Emely'},{'text': 'Emerald'},{'text': 'Emerie'},{'text': 'Emerson'},{'text': 'Emersyn'},{'text': 'Emery'},{'text': 'Emilee'},{'text': 'Emilia'},{'text': 'Emily'},{'text': 'Emma'},{'text': 'Emmaline'},{'text': 'Emmalyn'},{'text': 'Emmalynn'},{'text': 'Emmeline'},{'text': 'Emmie'},{'text': 'Emmy'},{'text': 'Emory'},{'text': 'Ensley'},{'text': 'Erica'},{'text': 'Erika'},{'text': 'Erin'},{'text': 'Esme'},{'text': 'Esmeralda'},{'text': 'Esperanza'},{'text': 'Estella'},{'text': 'Estelle'},{'text': 'Esther'},{'text': 'Estrella'},{'text': 'Eva'},{'text': 'Evalyn'},{'text': 'Evangeline'},{'text': 'Eve'},{'text': 'Evelyn'},{'text': 'Evelynn'},{'text': 'Everlee'},{'text': 'Everleigh'},{'text': 'Everly'},{'text': 'Evie'},{'text': 'Faith'},{'text': 'Fatima'},{'text': 'Faye'},{'text': 'Felicity'},{'text': 'Fernanda'},{'text': 'Finley'},{'text': 'Fiona'},{'text': 'Florence'},{'text': 'Frances'},{'text': 'Francesca'},{'text': 'Frankie'},{'text': 'Freya'},{'text': 'Frida'},{'text': 'Gabriela'},{'text': 'Gabriella'},{'text': 'Gabrielle'},{'text': 'Galilea'},{'text': 'Gemma'},{'text': 'Genesis'},{'text': 'Genevieve'},{'text': 'Georgia'},{'text': 'Gia'},{'text': 'Giana'},{'text': 'Gianna'},{'text': 'Giovanna'},{'text': 'Giselle'},{'text': 'Giuliana'},{'text': 'Gloria'},{'text': 'Grace'},{'text': 'Gracelyn'},{'text': 'Gracelynn'},{'text': 'Gracie'},{'text': 'Greta'},{'text': 'Guadalupe'},{'text': 'Gwen'},{'text': 'Gwendolyn'},{'text': 'Hadassah'},{'text': 'Hadlee'},{'text': 'Hadleigh'},{'text': 'Hadley'},{'text': 'Hailee'},{'text': 'Hailey'},{'text': 'Haley'},{'text': 'Halle'},{'text': 'Hallie'},{'text': 'Hana'},{'text': 'Hanna'},{'text': 'Hannah'},{'text': 'Harlee'},{'text': 'Harleigh'},{'text': 'Harley'},{'text': 'Harlow'},{'text': 'Harmoni'},{'text': 'Harmony'},{'text': 'Harper'},{'text': 'Hattie'},{'text': 'Haven'},{'text': 'Hayden'},{'text': 'Haylee'},{'text': 'Hayley'},{'text': 'Hazel'},{'text': 'Heaven'},{'text': 'Heavenly'},{'text': 'Heidi'},{'text': 'Helen'},{'text': 'Helena'},{'text': 'Henley'},{'text': 'Holland'},{'text': 'Holly'},{'text': 'Hope'},{'text': 'Hunter'},{'text': 'Iliana'},{'text': 'Imani'},{'text': 'India'},{'text': 'Ingrid'},{'text': 'Irene'},{'text': 'Iris'},{'text': 'Isabel'},{'text': 'Isabela'},{'text': 'Isabella'},{'text': 'Isabelle'},{'text': 'Isla'},{'text': 'Itzayana'},{'text': 'Itzel'},{'text': 'Ivanna'},{'text': 'Ivory'},{'text': 'Ivy'},{'text': 'Izabella'},{'text': 'Jacqueline'},{'text': 'Jada'},{'text': 'Jade'},{'text': 'Jaelyn'},{'text': 'Jaelynn'},{'text': 'Jaliyah'},{'text': 'Jamie'},{'text': 'Jana'},{'text': 'Jane'},{'text': 'Janelle'},{'text': 'Janessa'},{'text': 'Janiyah'},{'text': 'Jasmine'},{'text': 'Jaycee'},{'text': 'Jayda'},{'text': 'Jayde'},{'text': 'Jayden'},{'text': 'Jayla'},{'text': 'Jaylah'},{'text': 'Jaylee'},{'text': 'Jayleen'},{'text': 'Jaylene'},{'text': 'Jazlyn'},{'text': 'Jazlynn'},{'text': 'Jazmin'},{'text': 'Jazmine'},{'text': 'Jemma'},{'text': 'Jenna'},{'text': 'Jennifer'},{'text': 'Jenny'},{'text': 'Jessa'},{'text': 'Jessica'},{'text': 'Jessie'},{'text': 'Jewel'},{'text': 'Jillian'},{'text': 'Jimena'},{'text': 'Joanna'},{'text': 'Jocelyn'},{'text': 'Joelle'},{'text': 'Johanna'},{'text': 'Jolene'},{'text': 'Jolie'},{'text': 'Jordan'},{'text': 'Jordyn'},{'text': 'Joselyn'},{'text': 'Josephine'},{'text': 'Josie'},{'text': 'Joslyn'},{'text': 'Journee'},{'text': 'Journey'},{'text': 'Joy'},{'text': 'Joyce'},{'text': 'Judith'},{'text': 'Julia'},{'text': 'Juliana'},{'text': 'Julianna'},{'text': 'Julie'},{'text': 'Juliet'},{'text': 'Julieta'},{'text': 'Juliette'},{'text': 'Julissa'},{'text': 'June'},{'text': 'Juniper'},{'text': 'Jurnee'},{'text': 'Justice'},{'text': 'Kadence'},{'text': 'Kaelyn'},{'text': 'Kai'},{'text': 'Kaia'},{'text': 'Kailani'},{'text': 'Kailee'},{'text': 'Kailey'},{'text': 'Kailyn'},{'text': 'Kairi'},{'text': 'Kaitlyn'},{'text': 'Kaiya'},{'text': 'Kalani'},{'text': 'Kali'},{'text': 'Kaliyah'},{'text': 'Kallie'},{'text': 'Kamila'},{'text': 'Kamryn'},{'text': 'Kara'},{'text': 'Karen'},{'text': 'Karina'},{'text': 'Karla'},{'text': 'Karlee'},{'text': 'Karlie'},{'text': 'Karsyn'},{'text': 'Karter'},{'text': 'Kassandra'},{'text': 'Kassidy'},{'text': 'Katalina'},{'text': 'Kate'},{'text': 'Katelyn'},{'text': 'Katherine'},{'text': 'Kathleen'},{'text': 'Kathryn'},{'text': 'Katie'},{'text': 'Kaya'},{'text': 'Kaydence'},{'text': 'Kayla'},{'text': 'Kaylani'},{'text': 'Kaylee'},{'text': 'Kayleigh'},{'text': 'Kaylie'},{'text': 'Kaylin'},{'text': 'Kehlani'},{'text': 'Keira'},{'text': 'Kelly'},{'text': 'Kelsey'},{'text': 'Kendall'},{'text': 'Kendra'},{'text': 'Kenia'},{'text': 'Kenley'},{'text': 'Kenna'},{'text': 'Kennedi'},{'text': 'Kennedy'},{'text': 'Kensley'},{'text': 'Kenya'},{'text': 'Kenzie'},{'text': 'Keyla'},{'text': 'Khaleesi'},{'text': 'Khloe'},{'text': 'Kiana'},{'text': 'Kiara'},{'text': 'Kiera'},{'text': 'Kimber'},{'text': 'Kimberly'},{'text': 'Kimora'},{'text': 'Kinley'},{'text': 'Kinslee'},{'text': 'Kinsley'},{'text': 'Kira'},{'text': 'Kora'},{'text': 'Kori'},{'text': 'Kristina'},{'text': 'Kyla'},{'text': 'Kylee'},{'text': 'Kyleigh'},{'text': 'Kylie'},{'text': 'Kynlee'},{'text': 'Kyra'},{'text': 'Lacey'},{'text': 'Laila'},{'text': 'Lailah'},{'text': 'Lainey'},{'text': 'Lana'},{'text': 'Landry'},{'text': 'Laney'},{'text': 'Lara'},{'text': 'Laura'},{'text': 'Laurel'},{'text': 'Lauren'},{'text': 'Lauryn'},{'text': 'Layla'},{'text': 'Laylah'},{'text': 'Lea'},{'text': 'Leah'},{'text': 'Leanna'},{'text': 'Legacy'},{'text': 'Leia'},{'text': 'Leighton'},{'text': 'Leila'},{'text': 'Leilani'},{'text': 'Lena'},{'text': 'Lennon'},{'text': 'Lennox'},{'text': 'Leona'},{'text': 'Leslie'},{'text': 'Lexi'},{'text': 'Lexie'},{'text': 'Leyla'},{'text': 'Lia'},{'text': 'Liana'},{'text': 'Liberty'},{'text': 'Lila'},{'text': 'Lilah'},{'text': 'Lilian'},{'text': 'Liliana'},{'text': 'Lilianna'},{'text': 'Lilith'},{'text': 'Lillian'},{'text': 'Lilliana'},{'text': 'Lillianna'},{'text': 'Lillie'},{'text': 'Lilly'},{'text': 'Lily'},{'text': 'Lilyana'},{'text': 'Lina'},{'text': 'Linda'},{'text': 'Lindsey'},{'text': 'Lisa'},{'text': 'Liv'},{'text': 'Livia'},{'text': 'Lizbeth'},{'text': 'Logan'},{'text': 'Lola'},{'text': 'London'},{'text': 'Londyn'},{'text': 'Lorelai'},{'text': 'Lorelei'},{'text': 'Louisa'},{'text': 'Louise'},{'text': 'Lucia'},{'text': 'Luciana'},{'text': 'Lucille'},{'text': 'Lucy'},{'text': 'Luella'},{'text': 'Luna'},{'text': 'Lyanna'},{'text': 'Lydia'},{'text': 'Lyla'},{'text': 'Lylah'},{'text': 'Lyra'},{'text': 'Lyric'},{'text': 'Mabel'},{'text': 'Maci'},{'text': 'Macie'},{'text': 'Mackenzie'},{'text': 'Macy'},{'text': 'Madalyn'},{'text': 'Madalynn'},{'text': 'Maddison'},{'text': 'Madeleine'},{'text': 'Madeline'},{'text': 'Madelyn'},{'text': 'Madelynn'},{'text': 'Madilyn'},{'text': 'Madilynn'},{'text': 'Madison'},{'text': 'Madisyn'},{'text': 'Mae'},{'text': 'Maeve'},{'text': 'Magdalena'},{'text': 'Maggie'},{'text': 'Magnolia'},{'text': 'Maia'},{'text': 'Maisie'},{'text': 'Makayla'},{'text': 'Makenna'},{'text': 'Makenzie'},{'text': 'Malani'},{'text': 'Malaya'},{'text': 'Malaysia'},{'text': 'Maleah'},{'text': 'Malia'},{'text': 'Maliah'},{'text': 'Maliyah'},{'text': 'Mallory'},{'text': 'Mara'},{'text': 'Maren'},{'text': 'Margaret'},{'text': 'Margot'},{'text': 'Maria'},{'text': 'Mariah'},{'text': 'Mariam'},{'text': 'Mariana'},{'text': 'Marianna'},{'text': 'Marie'},{'text': 'Marilyn'},{'text': 'Marina'},{'text': 'Marissa'},{'text': 'Marjorie'},{'text': 'Marlee'},{'text': 'Marleigh'},{'text': 'Marley'},{'text': 'Marlowe'},{'text': 'Martha'},{'text': 'Mary'},{'text': 'Maryam'},{'text': 'Matilda'},{'text': 'Mavis'},{'text': 'Maxine'},{'text': 'Maya'},{'text': 'Mckenna'},{'text': 'Mckenzie'},{'text': 'Mckinley'},{'text': 'Meadow'},{'text': 'Megan'},{'text': 'Meilani'},{'text': 'Melania'},{'text': 'Melanie'},{'text': 'Melany'},{'text': 'Melina'},{'text': 'Melissa'},{'text': 'Melody'},{'text': 'Mercy'},{'text': 'Meredith'},{'text': 'Mia'},{'text': 'Miah'},{'text': 'Micah'},{'text': 'Michaela'},{'text': 'Michelle'},{'text': 'Mikaela'},{'text': 'Mikayla'},{'text': 'Mila'},{'text': 'Milan'},{'text': 'Milana'},{'text': 'Milani'},{'text': 'Milena'},{'text': 'Miley'},{'text': 'Millie'},{'text': 'Mina'},{'text': 'Mira'},{'text': 'Miracle'},{'text': 'Miranda'},{'text': 'Miriam'},{'text': 'Miya'},{'text': 'Molly'},{'text': 'Monica'},{'text': 'Monroe'},{'text': 'Monserrat'},{'text': 'Morgan'},{'text': 'Mya'},{'text': 'Myah'},{'text': 'Myla'},{'text': 'Mylah'},{'text': 'Myra'},{'text': 'Nadia'},{'text': 'Nala'},{'text': 'Nalani'},{'text': 'Nancy'},{'text': 'Naomi'},{'text': 'Natalia'},{'text': 'Natalie'},{'text': 'Nataly'},{'text': 'Natasha'},{'text': 'Nathalia'},{'text': 'Nathalie'},{'text': 'Naya'},{'text': 'Nayeli'},{'text': 'Nevaeh'},{'text': 'Nia'},{'text': 'Nicole'},{'text': 'Nina'},{'text': 'Noa'},{'text': 'Noelle'},{'text': 'Noemi'},{'text': 'Nola'},{'text': 'Noor'},{'text': 'Nora'},{'text': 'Norah'},{'text': 'Nova'},{'text': 'Novalee'},{'text': 'Nyla'},{'text': 'Nylah'},{'text': 'Oaklee'},{'text': 'Oakley'},{'text': 'Oaklyn'},{'text': 'Oaklynn'},{'text': 'Octavia'},{'text': 'Olive'},{'text': 'Olivia'},{'text': 'Opal'},{'text': 'Ophelia'},{'text': 'Paige'},{'text': 'Paislee'},{'text': 'Paisleigh'},{'text': 'Paisley'},{'text': 'Paityn'},{'text': 'Paloma'},{'text': 'Paola'},{'text': 'Paris'},{'text': 'Parker'},{'text': 'Patricia'},{'text': 'Paula'},{'text': 'Paulina'},{'text': 'Payton'},{'text': 'Pearl'},{'text': 'Penelope'},{'text': 'Penny'},{'text': 'Perla'},{'text': 'Peyton'},{'text': 'Phoebe'},{'text': 'Phoenix'},{'text': 'Piper'},{'text': 'Poppy'},{'text': 'Presley'},{'text': 'Princess'},{'text': 'Priscilla'},{'text': 'Quinn'},{'text': 'Rachel'},{'text': 'Raegan'},{'text': 'Raelyn'},{'text': 'Raelynn'},{'text': 'Raina'},{'text': 'Ramona'},{'text': 'Raquel'},{'text': 'Raven'},{'text': 'Raylee'},{'text': 'Rayna'},{'text': 'Rayne'},{'text': 'Reagan'},{'text': 'Rebecca'},{'text': 'Rebekah'},{'text': 'Reese'},{'text': 'Regina'},{'text': 'Reign'},{'text': 'Reina'},{'text': 'Remi'},{'text': 'Remington'},{'text': 'Remy'},{'text': 'Renata'},{'text': 'Renee'},{'text': 'Reyna'},{'text': 'Rhea'},{'text': 'Riley'},{'text': 'River'},{'text': 'Rivka'},{'text': 'Riya'},{'text': 'Romina'},{'text': 'Rory'},{'text': 'Rosa'},{'text': 'Rosalie'},{'text': 'Rosalyn'},{'text': 'Rose'},{'text': 'Roselyn'},{'text': 'Rosemary'},{'text': 'Rosie'},{'text': 'Rowan'},{'text': 'Royal'},{'text': 'Royalty'},{'text': 'Ruby'},{'text': 'Ruth'},{'text': 'Ryan'},{'text': 'Ryann'},{'text': 'Rylan'},{'text': 'Rylee'},{'text': 'Ryleigh'},{'text': 'Rylie'},{'text': 'Saanvi'},{'text': 'Sabrina'},{'text': 'Sadie'},{'text': 'Sage'},{'text': 'Saige'},{'text': 'Salma'},{'text': 'Samantha'},{'text': 'Samara'},{'text': 'Samira'},{'text': 'Sandra'},{'text': 'Saoirse'},{'text': 'Sara'},{'text': 'Sarah'},{'text': 'Sarai'},{'text': 'Sariah'},{'text': 'Sariyah'},{'text': 'Sasha'},{'text': 'Savanna'},{'text': 'Savannah'},{'text': 'Sawyer'},{'text': 'Saylor'},{'text': 'Scarlet'},{'text': 'Scarlett'},{'text': 'Scarlette'},{'text': 'Selah'},{'text': 'Selena'},{'text': 'Selene'},{'text': 'Serena'},{'text': 'Serenity'},{'text': 'Shelby'},{'text': 'Shiloh'},{'text': 'Siena'},{'text': 'Sienna'},{'text': 'Sierra'},{'text': 'Simone'},{'text': 'Sky'},{'text': 'Skye'},{'text': 'Skyla'},{'text': 'Skylar'},{'text': 'Skyler'},{'text': 'Sloan'},{'text': 'Sloane'},{'text': 'Sofia'},{'text': 'Sonia'},{'text': 'Sophia'},{'text': 'Sophie'},{'text': 'Spencer'},{'text': 'Stella'},{'text': 'Stephanie'},{'text': 'Stevie'},{'text': 'Summer'},{'text': 'Sunny'},{'text': 'Susan'},{'text': 'Sutton'},{'text': 'Sydney'},{'text': 'Sylvia'},{'text': 'Sylvie'},{'text': 'Talia'},{'text': 'Taliyah'},{'text': 'Tara'},{'text': 'Tatiana'},{'text': 'Tatum'},{'text': 'Taylor'},{'text': 'Teagan'},{'text': 'Tegan'},{'text': 'Tenley'},{'text': 'Teresa'},{'text': 'Tessa'},{'text': 'Thalia'},{'text': 'Thea'},{'text': 'Tiana'},{'text': 'Tiffany'},{'text': 'Tinley'},{'text': 'Tinsley'},{'text': 'Tori'},{'text': 'Treasure'},{'text': 'Trinity'},{'text': 'Vada'},{'text': 'Valentina'},{'text': 'Valeria'},{'text': 'Valerie'},{'text': 'Vanessa'},{'text': 'Veda'},{'text': 'Vera'},{'text': 'Veronica'},{'text': 'Victoria'},{'text': 'Vienna'},{'text': 'Violet'},{'text': 'Virginia'},{'text': 'Vivian'},{'text': 'Viviana'},{'text': 'Vivienne'},{'text': 'Whitney'},{'text': 'Willa'},{'text': 'Willow'},{'text': 'Winter'},{'text': 'Wren'},{'text': 'Wynter'},{'text': 'Ximena'},{'text': 'Xiomara'},{'text': 'Yamileth'},{'text': 'Yara'},{'text': 'Yareli'},{'text': 'Yaretzi'},{'text': 'Zahra'},{'text': 'Zainab'},{'text': 'Zaniyah'},{'text': 'Zara'},{'text': 'Zaria'},{'text': 'Zariah'},{'text': 'Zariyah'},{'text': 'Zaylee'},{'text': 'Zelda'},{'text': 'Zendaya'},{'text': 'Zion'},{'text': 'Zoe'},{'text': 'Zoey'},{'text': 'Zoie'},{'text': 'Zuri'},
		];  
    function nextQuote() {
        while (newQuoteIndex == oldQuoteIndex) {
            newQuoteIndex = Math.floor(Math.random() * quotes.length);
        }

        quoteSpan.innerHTML  = quotes[newQuoteIndex].text; //make HTML's quoteText random quote

        oldQuoteIndex = newQuoteIndex;
    }
    submitButton.onclick = nextQuote;
}

