# Understanding Java

No one involved in this workshop needs to know Java. The goal of this workshop is to work with code _even though we don't know the language_.

## Learning objectives

```objectives
- [ ] Make sense of code in a language you don't know.
- [ ] Identify similarities and differences between programming languages.
- [ ] Use documentation, debugging, and search techniques to fix a bug in a program in a language you don't know.
- [ ] Use documentation, debugging, and search techniques to extend a program in a language you don't know.
```

## Introduction

There are a lot of things in common across different programming languages.

Even if you don't know Java, knowing other languages gives you a basis for making sense of it.

All of your existing documentation/research/Googling skills will help you!

A sample complete implementation of this exercise can be found in https://github.com/CodeYourFuture/CYF-Workshops/blob/main/understanding-java/DnsResolver.java but we recommend you try to completely solve the exercises yourself rather than looking at the sample implementation.

## Understanding code

Here is some Java code:

```java
class DnsResolver {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.printf("Expected exactly one argument, but got %d%n", args.length);
            System.exit(1);
        }
        String host = args[0];

        String[] parts = host.split(".");
        System.out.printf("The top-level domain of the host %s is %s%n", host, parts[parts.length - 1]);
    }
}
```

Take 10 minutes to play computer with this code. Read through it line-by-line and work out what you think each line does.

Identify what things you don't know, or haven't seen before in another language. Try to work out what they are. First make a guess, and if you're not confident, do some research.

Identify what things you _have_ seen in another language, and what the equivalent code in that language may be.

## Debugging code

Predict what you expect this code to do and print.

Save the above Java code to a file named `DnsResolver.java`. From the same directory as the file, run the following command:

```bash
javac DnsResolver.java && java DnsResolver google.com
```

This does two things - it _compiles_ the `DnsResolver.java` file into a file called `DnsResolver.class`, and then it runs that file with the argument `google.com`.

If you run this command, you may see different results than what you expect. Try to debug and fix this problem.

## Extending code

Add additional code to the existing code to satisfy an additional requirement:

Resolve the DNS hostname passed as the program's command line argument, and print out the IP addresses it resolves to.
