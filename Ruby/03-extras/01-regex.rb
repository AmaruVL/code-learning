def contains_vowel(str)
  str =~ /[aeiou]/
end

def match_rule(str)
  if str.match(/\d\.\d/)
    return 'si'
  else
    return 'no'
  end
end

def match_dni(str)
  # str.match(/\d{8}/)
  !!str.match(/^\d{8}$/)
end

# p contains_vowel('test')
# p match_rule('424')
p match_dni('')