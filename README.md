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