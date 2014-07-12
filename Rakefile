
task :default do
  sh 'compass compile --sass-dir . --css-dir .'
end

task :watch do
  sh 'compass watch --sass-dir . --css-dir .'
end

task :install do
  cd '..' do
    ['yaml', 'css', 'js'].each do |ext|
      sh "ln -s HipChat-ss/HipChat-ss.#{ext}"
    end
  end
end
