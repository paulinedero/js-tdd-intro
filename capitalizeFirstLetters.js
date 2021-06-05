function capitalizeFirstLetters(input) {
    return input.length > 0 
    ? input.split(' ').map(element => element[0].toUpperCase() + element.slice(1)).join(' ')
    : ''
  }

module.exports = capitalizeFirstLetters;