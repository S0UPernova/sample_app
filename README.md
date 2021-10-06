# Ruby on Rails tutorial sample application

This is the sample application for
[*Ruby on Rails Turtorial:
Learn Web Development with Rails*](https://www.railstutorial.org/)
(6th Edition)
by [Michael Hartl](https://michaelhartl.com/)

## License
All source code in the [Ruby on Rails Turtorial](https://www.railstutorial.org/)
is available jointly under the MIT License and the Beerware License. See
[LICENSE.md](LICENSE.md) for details.

## Getting started
To get started with the app, clone the repo and then install the needed gems:
___
 If you are using bundler 3 or newer
```
$ bundle config set without 'production'
```
Next,
```
$ bundle install
```
and then migrate the database:
```
$ rails db:migrate
```
Finally, run the test suite to verify that everything is working correctly:
```
$ rails test
```
If the test suite passes, you'll be ready to run the app in a local Server:
```
$ rails server
```
For more information, see the
[*Ruby on Rails Turtorial* book](https://www.railstutorial.org/book)

___
## Some added bits
### some issues and curiosities I found while working through this book

---

## From chapter 3.1, Listing 3.5
This doesn't work
-
```
def hello
    render text: "hello, world!"
end
```
so I used this insted  
-
```
def hello
    render html: "hello, world!"
end
```
---
## From chapter 3.3, Listing 3.15.
### these commands do not seem to run the tests.
```
$ rails db:migrate 
$ rails test

Running via Spring preloader in process 13471
Run options: --seed 21150

# Running:



Finished in 0.004041s, 0.0000 runs/s, 0.0000 assertions/s.
0 runs, 0 assertions, 0 failures, 0 errors, 0 skips
```

### but this command does.

```
$ rake test

Run options: --seed 486

# Running:

..

Finished in 22.024436s, 0.0908 runs/s, 0.0908 assertions/s.
2 runs, 2 assertions, 0 failures, 0 errors, 0 skips
```
## I don't really know why yet,
### when I find out maybe I'll edit this with the explanation. 

<br>

---
## it seems to be working with rails test, but I am not sure what changed
### Though I suspect it was due to the fact that I was using two terminals in vs code, and one of them was out of sync,
### because when I tried the other one it worked properly.

```
$ rails test
Running via Spring preloader in process 7191
Run options: --seed 26433

# Running:

..

Finished in 0.599964s, 3.3335 runs/s, 3.3335 assertions/s.
2 runs, 2 assertions, 0 failures, 0 errors, 0 skips
```
---


## From chapter 5 listing 5.4
### this command does not work because the link is no longer correct
```
$ curl -o app/assets/images/kitten.jpg -OL https://cdn.lernenough.com/kitten.jpg
```
### This is with the current address as of 09/14/21
```
$ curl -o app/assets/images/kitten.jpg -OL https://learnenough.s3-us-west-2.amazonaws.com/kitten.jpg
```
---
## From chapter 3.3, Listing 6.27
### Missing curly brackets on email uniqueness.
```
class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 50}
  VALID_EMAIL_REGEX= /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: case_sensitive: false
end
```
### This is what actually works
```
class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 50}
  VALID_EMAIL_REGEX= /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: {case_sensitive: false}
end
```
---
## From chapter 7 listing 7.2
### There is an added space after the period in the first instance of the code, which seems to be
### a typo, and later references do not have it
```
/* miscellaneous */

. debug_dump {
  clear: both;
  float: left;
  width: 100%;
  margin-top: 45px;
  @include box_sizing;
}

```
---

## From chapter 8.2 listing 8.20
### this causes a failure to compile at heroku
```
const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

module.exports = environment
```
### Leaving the code at it's default value works just fine,
### with no issues with the bootstrap implementation
```
const { environment } = require('@rails/webpacker')
const { webpack } = require('webpack')

module.exports = environment

```
---
## From chapter 9 listing 9.25
### Test does not work
```
test "login without remembering" do
    # log in to set the cookie
    log_in_as(@user, remember_me: '1')
    # log in again and verify that the cookie is deleted
    log_in_as(@user, remember_me: '0')
    assert_nil cookies['remember_token']
  end
```
### the failure message
```
 FAIL UsersLoginTest#test_login_without_remembering (5.52s)
        Expected "" to be nil.
        test/integration/users_login_test.rb:63:in `block in <class:UsersLoginTest>'
```
## listing 9.28 seesm to have the working version
### it does not mention the difference in "login without remembering",
### but the version shown does work, unlike the previous example


```
require "test_helper"

class UsersLoginTest < ActionDispatch::IntegrationTest
  
  def setup
    @user = users(:michael)
  end
  .
  .
  .
  test "login with remembering" do
    log_in_as(@user, remember_me: '1')
    assert_equal FILL_IN, assigns(:user).FILL_IN
    # assert_not_nil cookies['remember_token']
  end

  test "login without remembering" do
    # Log in to set the cookie
    log_in_as(@user, remember_me: '1')
    # Log in again and verify that the cookie is deleted
    log_in_as(@user, remember_me: '0')
    assert_empty cookies[:remember_token]
  end
  .
  .
  .
end
```

### This version also seems to work without an issue
```
test "login without remembering" do
    # log in to set the cookie
    log_in_as(@user, remember_me: '1')
    # log in again and verify that the cookie is deleted
    log_in_as(@user, remember_me: '0')
    assert cookies['remember_token'].blank?
  end
```