function getDate()
{
    return new Date().toLocaleDateString('en-us', {
         day:"numeric", month:"numeric", year:"numeric",
          hour:"2-digit", minute:"numeric", second:"numeric",
           fractionalSecondDigits:"3",
           hourCycle: "h24"
        }) 
    
}

module.exports = getDate