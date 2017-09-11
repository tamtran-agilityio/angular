# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  port: 9778

  plugins:
    livereload:
      enabled: true
  
  watchOptions:
    preferredMethods: ['watchFile', 'watch']
    catchupDelay: 0
    regenerateDelay: 0
}

# Export the DocPad Configuration
module.exports = docpadConfig