
var fs = require('fs')
var mkdirp = require('mkdirp')
var path = require('path')
/**
 * this merges source file to target file, using regexp to
 * move target file data into the source file before copying
 * to the destinatioin.
 merge sections
 // CUSTOM_HEADER_START
 // CUSTOM_HEADER_END
 // CUSTOM_TOP_START
 // CUSTOM_TOP_END
 // CUSTOM_MIDDLE_START
 // CUSTOM_MIDDLE_END
 // CUSTOM_BOTTOM_START
 // CUSTOM_BOTTOM_END
*/

/**
  returns true if the destination file changed
  */
function mergeAction (answers, config, plop ) {
  let sections = []
  const src = fs.readFileSync(config.sourceFileName, {encoding: 'utf-8'})
  let dest;
  try {
    dest = fs.readFileSync(config.destFileName, {encoding: 'utf-8'})
  }
  catch(err) {
    // dest does not exist, so just copy the src to the destination
    let p = path.dirname( config.destFileName )
    mkdirp.sync( p )
    fs.writeFileSync(config.destFileName, src)
    return 'New File, ' + config.destFileName;
  }

//  dest.replace(/CUSTOM_(.*?)_START/g, function(match, $1, $2, offset, original) {
  dest.replace(/CUSTOM_(.*?)_START/g, function(match, $1, $2, offset, original) {
    sections.push($1)
  });

  // console.log(sections)

  let data = {}
  let newDest = src
  sections.forEach( key => {
    let stg = `(CUSTOM_${key}_START)([\\s\\S]*)(CUSTOM_${key}_END)`
    // console.log( stg )
    let regexp = new RegExp(stg, 'm')
    dest.replace(regexp, function( match, $1, $2, $3, offset, original) {
      data[key] = $2
    })
    newDest = newDest.replace(regexp, function(match, $1, $2, $3) {
      return $1 + data[key] + $3
    })
  })

  //console.log( data )
  //console.log( newDest )

  if (newDest !== dest ) {
    fs.writeFileSync( config.destFileName, newDest);
    return 'File updated, ' + config.destFileName;
  }
  return 'File not changed.';
}

function mergeFolders( answers ) {
  let allNames = [];

  function getFileNames( dir ) {
    let stat = fs.statSync( dir )
    if (stat.isFile()) {
      allNames.push( dir )
    }
    else {
      let names = fs.readdirSync( dir );
      names.forEach( (name) => {
        getFileNames( path.join( dir, name ))
      })
    }
  }

  getFileNames( answers.srcFolder );

  let actions = allNames.map( (fname) => {
    fname = './' + fname
    let destFileName = fname.replace( answers.srcFolder, answers.destFolder);
    return {
      type: 'mergeAction',
      sourceFileName: fname,
      destFileName
    }
  });
  // console.log(actions)
  return actions;
}

module.exports = {
  mergeAction,
  mergeFolders
}
