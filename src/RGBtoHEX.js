 export default function rgbToHex(red, green, blue) {
    // Validate color values
    if (typeof red !== 'number' || isNaN(red) || red < 0 || red > 255) {
      throw new Error('Invalid red value provided.');
    }
    if (typeof green !== 'number' || isNaN(green) || green < 0 || green > 255) {
      throw new Error('Invalid green value provided.');
    }
    if (typeof blue !== 'number' || isNaN(blue) || blue < 0 || blue > 255) {
      throw new Error('Invalid blue value provided.');
    }
  
    // Convert to hexadecimal strings
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
  
    return `#${redHex}${greenHex}${blueHex}`;
  }
  

//   const hexCode = rgbToHex(red, green, blue);
  