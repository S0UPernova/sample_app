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
___

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
### I don't really know why yet,
when I find out maybe I'll edit this with the explanation.
### it seems to be working with rails test, but I am not sure what changed 

```
$ rails test
Running via Spring preloader in process 7191
Run options: --seed 26433

# Running:

..

Finished in 0.599964s, 3.3335 runs/s, 3.3335 assertions/s.
2 runs, 2 assertions, 0 failures, 0 errors, 0 skips
```