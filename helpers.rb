require 'yaml'

def url_for_library library, file, version
    "//cdnjs.cloudflare.com/ajax/libs/#{library}/#{version}/#{file}"
end

def library_urls
  #YAML::load_file("#{File.dirname __FILE__}/libraries.yml").map do |data|
  YAML::load_file('libraries.yml').map do |data|
    url_for_library data['library'], data['file'], data['version']
  end
end
