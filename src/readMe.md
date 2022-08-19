# TODO

## Vinaya

- [ ] There needs to be a way for `sutta` type books to have a range. Nothing like that exists in the suttas, however for vinaya there is a range in
      _ Adhikaranasamatha (bu, bi)
      _ Patdesaniya (bi) \* Sekhiya (bi)

## General

- [ ] only put into page title when it's a valid citation
- [ ] allow creation of urls to books/chapters
      this requirs allowing secondNumber===0 without causing other things to break
      And not every chapter book should have this optinon. e.g Thag
      WAS WORKING, NOW BROKEN for SN
- [ ] sn4 and an4 should automatically give chapter pages
- [ ] allow setting translator/layout in text input
- [x] add v for thag/thig
- [x] add ch chapter flags
- [x] add link to verses directly in dhp
- [x] save options in local storage
- [ ] itvch9 should give an error message
- [ ] give alert for thag/thig that v can be used to get to a verse
- [ ] remove chapter alert message when a chapter flag is used
- [ ] remove verse alert message when a verse flag is used
- [ ] vv9.1 should throw chapter error
- [ ] vv7.12 should throw sutta error
- [ ] dhpch1 should show chapter 1 for ABT

# fixing dhammaTalks

SN 43, and 44 are all one page.
Thag18.1 is really Thag18

# fixing SF

fix range
https://suttafriends.org/sutta/sn55-63/
https://suttafriends.org/sutta/sn56-61-2/ and further

// if second number exists
// then see if first number is <= the number of chapters.
// if it's not
// then reject
// if it is less
// then see if the second number is <= numbers of suttas in that chapter
// if it's not, reject
// if it is, then the whole thing needs to be converted into the correct url

Dhamapada old psudo code
// if "verse" present treat as verse
// if "chapter" present treat as chapter
//if firstNumber > 26
// then if firstNumber>423
// reject as verse number too high
// else treat as verse :: generate url by cycling through range*sutta
//
//if firstNumber <= 26
// then generate \_2* urls
// one for chapter
// one for verse

===========================

function is given string and returns either a valid citation and or an error message
{
book:book,
firstNum: firstNum,
secondNum, secondNum,
error:error
}

(verse|v|chapter|ch|c|)[ .-]\*
