const twinPeaksPeople = [
  {
    name: 'Pete Martell',
    occupation: 'Packard Sawmill Manager',
    age: '53',
    hair_color: 'Grey',
    eye_color: 'Brown',
    actor: 'Jack Nance',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/3/3d/Pete_Martell.jpg/revision/latest/scale-to-width-down/700?cb=20170822052012'
  },
  {
    name: 'Log Lady',
    occupation: 'Log Lady',
    age: '59',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Catherine E. Coulson',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/6/68/Logladyreplacement.jpg/revision/latest/scale-to-width-down/700?cb=20160906170235'
  },
  {
    name: 'Dale Cooper',
    occupation: 'FBI Special Agent, Deputy Twin Peaks Sheriff Department',
    age: '35',
    hair_color: 'Brown',
    eye_color: 'Hazel',
    actor: 'Kyle MacLachlan',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/3/3a/Cooper_005.jpg/revision/latest/scale-to-width-down/700?cb=20170328023501'
  },
  {
    name: 'Bobby Briggs',
    occupation: 'Ben Horne\'s Executive Assistant',
    age: '20',
    hair_color: 'Brown',
    eye_color: 'Blue',
    actor: 'Dana Ashbrook',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/9/98/BobbyHiRes.jpg/revision/latest/scale-to-width-down/700?cb=20161101195815'
  },
  {
    name: 'Norma Jennings',
    occupation: 'Owner Double R Diner',
    age: '39',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Peggy Lipton',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/f/f3/Norma14214.jpg/revision/latest/scale-to-width-down/700?cb=20161030052435'
  },
  {
    name: 'Sheriff Truman',
    occupation: 'Sheriff of Twin Peaks',
    age: '39',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Michael Ontkean',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/c/c7/HarryNew.jpg/revision/latest/scale-to-width-down/700?cb=20161026022237'
  },
  {
    name: 'Albert Rosenfield',
    occupation: 'FBI Special Agent',
    age: '33',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Miguel Ferrer',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/e/e6/AlbertRosenfeld.jpg/revision/latest/scale-to-width-down/699?cb=20100330010337'
  },
  {
    name: 'Laura Palmer',
    occupation: 'Student',
    age: '18',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Sheryl Lee',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/e/ef/Laura_Palmer%2C_the_Queen_Of_Hearts.jpg/revision/latest/scale-to-width-down/700?cb=20170615044123'
  },
  {
    name: 'Dr. Hayward',
    occupation: 'Doctor',
    age: '60',
    hair_color: 'Grey',
    eye_color: 'Blue',
    actor: 'Warren Frost',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/9/94/DocHaywardNew.jpg/revision/latest/scale-to-width-down/700?cb=20161025124948'
  },
  {
    name: 'Leo Johnson',
    occupation: 'Trucker',
    age: '35',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Eric Da Re',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/a/a7/Leo_Johnson.jpg/revision/latest/scale-to-width-down/700?cb=20161025123520'
  },
  {
    name: 'Benjamin Horne',
    occupation: 'Owner Great Northern Hotel, Hornes Department Store, One Eyed Jacks',
    age: '49',
    hair_color: 'Brown',
    eye_color: 'Blue',
    actor: 'Richard Beymer',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/f/fa/Ben_001.jpg/revision/latest/scale-to-width-down/699?cb=20100419234934'
  },
  {
    name: 'Shelly Johnson',
    occupation: 'Waitress at the Double R Diner',
    age: '20',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Mädchen Amick',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/2/21/Shelly_Johnson_%281989%29.jpg/revision/latest/scale-to-width-down/699?cb=20180220025449'
  },
  {
    name: 'Deputy Hawk',
    occupation: 'Deputy',
    age: '39',
    hair_color: 'Black',
    eye_color: 'Brown',
    actor: 'Michael Horse',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/a/a1/DeputyHawkAtTheDiner.jpg/revision/latest/scale-to-width-down/700?cb=20160925005033'
  },
  {
    name: 'Dr. Jacoby',
    occupation: 'Psychiatrist',
    age: '53',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Russ Tamblyn',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/6/6f/JacobyNew.jpg/revision/latest/scale-to-width-down/700?cb=20161025125112'
  },
  {
    name: 'Audrey Horne',
    occupation: 'Student',
    age: '19',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Sherilyn Fenn',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/9/98/AudreyNew.jpg/revision/latest/scale-to-width-down/700?cb=20161026025355'
  },
  {
    name: 'Alice Tremond',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Carrie Page',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Bradley Mitchum',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'James Hurley',
    occupation: 'Mechanic',
    age: '17',
    hair_color: 'Black',
    eye_color: 'Blue',
    actor: 'James Marshall',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/6/66/Jamesnew.jpg/revision/latest/scale-to-width-down/700?cb=20161026024503'
  },
  {
    name: 'Donna Hayward',
    occupation: 'Student',
    age: '18',
    hair_color: 'Brown',
    eye_color: 'Blue',
    actor: 'Laura Flynn Boyle',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/0/0c/Donna_001.jpg/revision/latest/scale-to-width-down/696?cb=20100419235618'
  },
  {
    name: 'The Giant',
    occupation: 'Giant',
    age: 'unknown',
    hair_color: 'Grey',
    eye_color: 'Brown',
    actor: 'Carl Struycken',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/b/b4/GiantNew.png/revision/latest/scale-to-width-down/700?cb=20161014151543'
  },
  {
    name: 'Lucy Moran',
    occupation: 'Receptionist',
    age: '27',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Kimmy Robertson',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/4/47/LucyNewAgain.jpg/revision/latest/scale-to-width-down/700?cb=20161026023511'
  },
  {
    name: 'Judge Sternwood',
    occupation: 'Judge',
    age: 'unknown',
    hair_color: 'Grey',
    eye_color: 'Blue',
    actor: 'Royal Dano',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/2/2b/Clinton_Sternwood.jpg/revision/latest/scale-to-width-down/700?cb=20160910211305'
  },
  {
    name: 'Harold Smith',
    occupation: 'Horticulturist',
    age: 'unknown',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Lenny Von Dohlen',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/d/de/Harold_001.jpg/revision/latest/scale-to-width-down/700?cb=20100423101150'
  },
  {
    name: 'Gordon Cole',
    occupation: 'FBI Regional Bureau Chief',
    age: 'unknown',
    hair_color: 'Grey',
    eye_color: 'Blue',
    actor: 'David Lynch',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/7/7a/GordonColeNewMainPhoto.png/revision/latest/scale-to-width-down/700?cb=20171109180605'
  },
  {
    name: '-Armed Man',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Jerry Horne',
    occupation: 'Lawyer',
    age: '44',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'David Patrick Kelly',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/5/54/Jerryhornedpk.jpg/revision/latest/scale-to-width-down/699?cb=20160511122515'
  },
  {
    name: 'Leland Palmer',
    occupation: 'Lawyer',
    age: '45',
    hair_color: 'Brown/White',
    eye_color: 'Blue',
    actor: 'Ray Wise',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/c/cd/LelandPalmer.jpg/revision/latest/scale-to-width-down/700?cb=20160816065237'
  },
  {
    name: 'Roger Hardy',
    occupation: 'FBI Agent',
    age: 'unknown',
    hair_color: 'Grey',
    eye_color: 'Brown',
    actor: 'Clarence Williams III',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/4/44/Roger_Hardy.jpg/revision/latest/scale-to-width-down/700?cb=20161101201205'
  },
  {
    name: 'Denise Bryson',
    occupation: 'DEA Agent',
    age: '35',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'David Duchovny',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/7/7f/Denise_Bryson.jpg/revision/latest/scale-to-width-down/700?cb=20100330225839'
  },
  {
    name: 'Evelyn Marsh',
    occupation: 'none',
    age: 'unknown',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Annette McCarthy',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/5/51/Evelyn_Marsh.jpg/revision/latest/scale-to-width-down/700?cb=20180322012250'
  },
  {
    name: 'Colonel Riley',
    occupation: 'Colonel US Air Force',
    age: 'unknown',
    hair_color: 'unknown',
    eye_color: 'Brown',
    actor: 'Tony Burton',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/d/da/Calvin_Reilly.jpeg/revision/latest/scale-to-width-down/700?cb=20161014042614'
  },
  {
    name: 'Jean Renault',
    occupation: 'Criminal',
    age: '59',
    hair_color: 'Brown',
    eye_color: 'Blue',
    actor: 'Michael Parks',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/1/16/Jean_Renault.jpg/revision/latest/scale-to-width-down/700?cb=20111030055804'
  },
  {
    name: 'Mayor Milford',
    occupation: 'Mayor of Twin Peaks',
    age: '83',
    hair_color: 'Grey',
    eye_color: 'Blue',
    actor: 'John Boylan',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/c/c5/Dwayne_Milford.jpg/revision/latest/scale-to-width-down/700?cb=20160504043152'
  },
  {
    name: 'Pete',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Hank Jennings',
    occupation: 'Criminal',
    age: '39',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Chris Mulkey',
    image: ''
  },
  {
    name: 'Dick Tremayne',
    occupation: 'Men\'s Fashion Horne Department Store',
    age: '39',
    hair_color: 'Black',
    eye_color: 'Brown',
    actor: 'Ian Buchanan',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/f/f5/HankHiRes2.jpg/revision/latest/scale-to-width-down/700?cb=20161101201553'
  },
  {
    name: 'Windom Earle',
    occupation: 'Former FBI Agent',
    age: '58',
    hair_color: 'Brown',
    eye_color: 'Brown',
    actor: 'Kenneth Walsh',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/a/a2/Windom_Earle.jpg/revision/latest/scale-to-width-down/683?cb=20100329095557'
  },
  {
    name: 'Major Briggs',
    occupation: 'Major US Air Force',
    age: '45',
    hair_color: 'Red',
    eye_color: 'Hazel',
    actor: 'Don S Davis',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/f/f5/Garland_Briggs.png/revision/latest/scale-to-width-down/700?cb=20161021155038'
  },
  {
    name: 'Doctor Hayward',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Harry Truman',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Annie Blackburn',
    occupation: 'Waitress Double R Diner',
    age: '22',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Heather Graham',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/1/14/Annie_Blackburn.jpg/revision/latest/scale-to-width-down/699?cb=20190921214308'
  },
  {
    name: 'Roger',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Duncan Todd',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Ben Horne',
    occupation: 'Owner Great Northern Hotel, Hornes Department Store, One Eyed Jacks',
    age: '49',
    hair_color: 'Brown',
    eye_color: 'Blue',
    actor: 'Richard Beymer',
    image: ''
  },
  {
    name: 'American Girl',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Dougie Jones',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Beulah',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Lucy Brennan',
    occupation: 'Receptionist',
    age: '',
    hair_color: 'Blonde',
    eye_color: 'Blue',
    actor: 'Kimmy Robertson',
    image: ''
  },
  {
    name: 'Constance Talbot',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Becky Burnett',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Charlotte',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Richard Horne',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Elizabeth',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Jimmy',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Tommy',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Warden Knox',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Beverly Paige',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Ray Monroe',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Woodsman',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Diane Evans',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Nadine Hurley',
    occupation: 'Owner Run Silent, Run Drapes',
    age: '35',
    hair_color: 'Red',
    eye_color: 'Green',
    actor: 'Wendy Robie',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/4/4b/NadineNew.jpg/revision/latest/scale-to-width-down/700?cb=20161026023639'
  },
  {
    name: 'Anthony Sinclair',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Rodney Mitchum',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Renzo',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Muddy',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Chantal',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Hutch',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Charlie',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Tammy Preston',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Drunk',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Sarah Palmer',
    occupation: 'Housewife',
    age: '46',
    hair_color: 'Red',
    eye_color: 'Blue',
    actor: 'Grace Zabriskie',
    image: 'https://static.wikia.nocookie.net/twinpeaks/images/3/30/Sarah_007.png/revision/latest/scale-to-width-down/700?cb=20170711230313'
  },
  {
    name: 'Hawk',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
  {
    name: 'Bushnell Mullins',
    occupation: '',
    age: '',
    hair_color: '',
    eye_color: '',
    actor: ''
  },
];

export default twinPeaksPeople;
