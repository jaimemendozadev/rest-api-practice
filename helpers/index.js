module.exports = {
  sanitizeFormString: function(string){
    var entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });

  },

  stripListCommaSpace: function(string){
    var classString = string.replace(/[, ]+/g, " ").trim();

    //returns array of student class codes 
    return classString.split(" ");

  }
}