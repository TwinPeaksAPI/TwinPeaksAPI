## Owl Cave

## Created By:
  # Austin Summerlin @
  # Kayla Schoorl @
  # Tucker Hoog @
  # Taylor Tokaref @
  # Zach Gaines @

## Owl Cave is an API service which allows you to gather your favorite quotes from one of Telveision's most infamous shows Twin Peaks.
## Owl Cave can also be invited into a Discord Channel where you can ping it for quotes as well.
## See Instructions Below:

# Using this service couldn't be more simple, just follow one of our easy to use endpoints to get started:
  # For Example:
  
  # If you wanted to retrieve a list of every quote available you would use the following endpoint:
  # https://damp-cove-34137.herokuapp.com/api/quotes/
  
  # Now say that you wanted to get a quote involving one of your favorite characters. If that character were say everyones favorite FBI Special Agent Dale Cooper, you would use the following endpoint:
  # https://damp-cove-34137.herokuapp.com/api/quotes/characters/Dale%20Cooper # You could also write '/Dale Cooper' the '%20' represents a space.
  
  # What if you wanted to make a Twin Peaks Quote of the Day google exstension or just can't decide which character you want a quote from, why not use our random quote endpoint:
  # https://damp-cove-34137.herokuapp.com/api/quotes/random

  # Maybe you just want to retrieve a quote of someone talking about pie or coffee or owls, cause they might not be what they seem. You would use our Get Quotes By Search Term Endpoint:
  # https://damp-cove-34137.herokuapp.com/api/quotes/search/owls

# Also featured in Owl Cave is information about your favorite characters.
  # For Example:
  
  # Say you first watched the show when it aired on CBS in the early 90's but have trouble remembering the faces and names of the residents of Twin Peaks. You could use our Get All Character Information endpoint and have access to stats about the characters including things like their occupation and links to an image.

# There are many more endpoints to explore at your leisure, you will find them all below.
  
  # Get Quote By ID:
  # https://damp-cove-34137.herokuapp.com/api/quotes/[id]
  # Refers to quotes.id

  # Limit The Number Of Quotes Returned:
  # https://damp-cove-34137.herokuapp.com/api/quotes/limit/5
  # Will return 5 quotes

  # Get Random Quote From Specific Character:
  # https://damp-cove-34137.herokuapp.com/api/quotes/characters/random/[Character-Name]
  # Remember names can either use a space or %20 [/Gordon Cole or /Gordon%20Cole] either is fine.

  # Get Specific Character Information:
  # https://damp-cove-34137.herokuapp.com/api/characters/[Character-Name]
  # Remember names can either use a space or %20 [/Log Lady or /Log%20Lady] either is fine.

# Here is a list of some of the residents of Twin Peaks that you can choose from:
  # Dale Cooper
  # Lucy Moran
  # Gordon Cole
  # Bobby Briggs
  # Shelly Johnson
  # Log Lady

# Using the Discord Bot:
  # Bot Instructions to follow...