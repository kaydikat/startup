Lecture 2

debug - might set env variable to debug so you don't need a new parameter
main program in c
    int main(int argc, char *argv[]) {
        if (argc > 1 && strcmp(argv[1], "-debug") == 0) {
            setenv("DEBUG", "1", 1);
        }
        for (int i = 0; i < argc; i++) {
            printf("argv[%d] = %s\n", i, argv[i]);
        }
        // do stuff
    }
    argc is name of first parameter
        stuff stored in it is an integer
        argc will never be zero
    argv is name of second parameter
        type of this is memory address of a character pointer
        type - char**
        like a pointer to a pointer
        pointers on the lab machines are 8 bytes
        points
        refers to the value of this variable (the red pointer)
        argv[0] - refers to the value of the first pointer in the array;
        argv points to an array of pointers that point to the first character of a string
        argv[0] is the string of the name of the program that was run
        let's say we have one paramter
        argv[0] is the string of the name of the program that was run
        argv[1] is the string of the first parameter
        argv[2] is a 0
    ./argv byu cougars
        argc = 3
        argv[0] = ./argv
        argv[1] = byu
        argv[2] = cougars
        argv[3] = 0

    how to use debugger
        gdb ./argv
        break main
        run byu cougars
        print argc
        p argv[0] // prints the string of the name of the program that was run
        p argv[1] // prints the string of the first parameter

    &argv gives you the address of the first pointer in the array
    &argv[0] gives you the address of the first pointer in the array - same thing as &argv
    &argv[1] will be 8 bytes apart from &argv[0]


    sizeof is a compile time operator that tells you how many bytes something is
        sizeof is an operator not a function
        sizeof(argv) will give you 8
        sizeof(char) will give you 1
        sizeof(int) will give you 4

        int a = 0;
        double d = 12.2
        sizeof(a+d) will give you 8

    int main(void)
    {
        x = 5;
        y = 6;
        y= sizeof(x++)
        printf("%d %d\n", x, y);
    }
    x will be 6
    y will be 4

    arrays
        int main()
        {
             int arr[] = {1, 2, 3, 4, 5};
             printf("Number of elements: %d\n", sizeof(arr)/sizeof(arr[0]));
        }
        sizeof(arr) will be 20
        output is "Number of elements: 5"

    sizeof is used when allocating memory dynamically
        unary operator - not a function
    malloc - memory allocation - allocates memory on the heap - returns a pointer to the memory
    int* ptr = (int*)malloc(sizeof(int) * 10);
        this will allocate 40 bytes of memory because an int is 4 bytes and we are allocating 10 of them

kernal - keeps track of all info abot the file
application - keeps track of the file descriptor
descriptor - nonnegative int that identifies the file
    0 - standard input
    1 - standard output
    2 - standard error
    3 - next file opened
    header file <unistd.h> has the file descriptor
    file position k - the next byte that will be read or written
    seek - move the file position k
    read - copies n bytes from the file to memory
        starts at k and increments k by n
        when k is greater than m bytes it triggers an EOF
        no explicit EOF character
        write - copies n bytes from memory to the file
            starts at k and increments k by n

Lecture 2
    argc - number of arguments - counts name of program
    argv - pointer to a pointer to a character
         points to array of pointers that point to the first character of a string

    sizeof
        int size = 1000
        char * myArray1 = (char*)malloc(sizeof(char) * size); - allocated on the heap
        char myArray2[1000] - allocated on the stack
            sizeof(myArray1) will be 8 - stops ar char * and decides its a pointer
            sizeof(myArray2) will be 1000
            if it's a static array it will be 1000
            it it's a dynamic array it will be 8

    Chapter 10
        file - sequence of bytes m
        file types
            regular - normal file contains arbitrary data
            directory - file that contains other files
                . (dot) is a link to the current directory
                .. (dot dot) is a link to the parent directory
            special - device file
            named pipe - FIFO
            socket - communication between processes
            symbolic link - pointer to another file
            hard link - pointer to another file
        path - sequence of directories separated by slashes
            absolute path - starts with a slash
            relative path - does not start with a slash - relative to the current directory
            cwd - current working directory
        RIO package - library that provides robust I/O functions
            rio_readn - robustly reads n bytes from a file descriptor
            rio_writen - robustly writes n bytes to a file descriptor
            rio_readinitb - initializes a buffer for robust reading
            rio_readlineb - robustly reads a line of text

        how the unix kernal represent open files
            process has a file desccripter table
            one table for each process
            if a file descripter is not empty, it points to an entry in the file table
            open file has a file table entry
                file pos
                refcnt - number of file descriptors that point to this entry
                v-node - information about the file - open file points to this
            stdin, stdout, stderr are already open
            stdin - input from the keyboard
            stdout - output to the screen - information about device that might go to terminal or disk
            stderr - another file descripter that goes to the screen
            if you open two files with the same name, they will point to the same v-node
            fork - inherit's it's parent's file table
                refcont for fork is incremented meaning that the child and parent share the same file table

        I/O redirection
            linux> ls > foo.txt
            > - does i/o redirection - takes the output of the program and puts it in a file
            when it calls fork it creates a child process
                 child shell will run ls command
                 child shell will open foo.txt
                 anytime we see > it is the same as 1>
                    1 means we're changing number 1 stdout
                 "redirecting stout" means we're changing the file descriptor
            dup - creates a copy of a file descriptor
                dup2 - copies a file descriptor to another file descriptor
                    dup2(oldfd, newfd) - copies oldfd to newfd
                    it will come and look at 1 in file descripter table
                    it will close the file descriptor that is in newfd
                    it will copy the file descriptor that is in oldfd to newfd
                    refcnt will be incremented
                dup2(fd1, fd2) - copies fd1 to fd2
                dup2(1, fd) - copies stdout to fd
                dup2(fd, 1) - copies fd to stdout

            ./redirect > outfile will redirect the output of the program to outfile
            ./redirect >> outfile will append the output of the program to outfile
            ./redirect 2> outfile will redirect the error output of the program to outfile

        Pipe - |
            take output of one program and use it as input to another program
            ls -l | grep z - will list all files and then grep for z
            ls is gonna run and the grop is gonna run
                will call fork twice to create two sub shells
                one shell will direct its stdout to right en of pipe
                other shell will direct its stdin to left end of pipe
         10.3
            open function converts filename to a file descriptor
                descripter returned is the smallest available file descriptor
                fd = open("foo.txt", O_RDONLY, 0);
                open file with intent of appending some data
                    fd = open("foo.txt", O_WRONLY|O_APPEND, 0);
                int open(const char *filename, int flags, mode_t mode)
                    filename - name of the file
                    flags - O_RDONLY, O_WRONLY, O_RDWR, O_CREAT, O_TRUNC, O_APPEND
                    mode - permissions for the file
                        S_IRUSR, S_IWUSR, S_IXUSR, S_IRGRP, S_IWGRP, S_IXGRP, S_IROTH, S_IWOTH, S_IXOTH
                    returns a file descriptor
                    close - closes a file descriptor
                        close(fd);
                    int main()
                    {
                        int fd1, fd2;
                        fd1 = open("foo.txt", O_RDONLY, 0); #output is 3
                        close(fd); #closes file descriptor 3
                        fd2 = open("bar.txt", O_RDONLY, 0); #output is 3
                        printf("fd1 = %d, fd2 = %d\n", fd1, fd2); #output is fd1 = 3, fd2 = 3
                        exit(0);
                    }
                    10.4
                    read function - copies at most n bytes from the current file position of a file to memory
                        n = read(fd, buf, n);
                        fd - file descriptor
                        buf - buffer to copy to
                        n - number of bytes to copy
                        returns number of bytes copied
                        -1 if error
                        0 if EOF
                        otherwise return value indicates the number of bytes copied
                    write function - copies at most n bytes from memory to the current file position of a file
                    sometimes read and write transfer fewer bytes than requested - short counts
                        read - EOF
                        write - disk full
                    if rading in 50-byte chunks and file contains only 20 bytes
                        first read will return 20
                        second read will return 0

                    10.9
                        i/o redirection
                        dup2 - copies a file descriptor to another file descriptor
                            dup2(oldfd, newfd) - copies oldfd to newfd
                            it will come and look at 1 in file descripter table
                            it will close the file descriptor that is in newfd
                            it will copy the file descriptor that is in oldfd to newfd
                            refcnt will be incremented
                            let descripter 1 correspony to file A
                            let descripter 4 correspond to file B
                            dup2(4, 1) - copies file B to file A
                            both descriptors will point to file B
                                A will be closed
                                A's file table entry and v-node will be decremented
                                reference count for file B will be incremented
                                any stdout will go to file

## IO Redirection Part 2 ##
- ./redirect 2>/dev/null - will redirect the error output of the program to /dev/null
- /dev/null is a special file that discards all data written to it
- ./redirect 2 > z - will redirect the parameter 2 to standard output to z since there is a space between 2 and >
- BYU = cougars vs BYU=cougars - the first one will set the environment variable BYU to cougars
# Recipe for Bash #
- bash evaluates from left to right
- will find the first available entry (2) and assingn to the next available fd
- shell will call dup2(3,1) - will close 1 and copy 3 to 1
- so now 1 and 3 are both pointing to number 2
- ./redirect 1>z 2>&1 - will redirect the output of the program to z and the error output of the program to z
- stout usually does buffered IO 
- stderr usually does unbuffered IO
- Let's change order
    - ./redirect 2>&1 1>z - Line 2: output to stderr

2>&1 - redirect stderr to stdout
fd table
- 0 - stdin
- 1 - stdout -> terminal
- 2 - stderr -> terminal
- 3 - next file opened

1>z - redirect stdout to z
fd table
- 0 - stdin
- 1 - z
- 2 - stderr -> terminal
- 3 - z
dup2(3,1) - copies 3 to 1

- if I do 2>1 it will think 1 is a file
- if I do 2>&1 it will think 1 is a file descriptor

## Processes (Chapter 8) ##
- process - an instance of a running program

Memory
1. stack - data that is statically allocated
2. heap - data that is dynamically allocated using malloc
3. data 
4. code

CPU
1. registers

- you have multiple processes running on the same CPU
- but what really happens is that the CPU runs one at a time
- the CPU will switch between processes

Multicore processos - multiple CPUS on a single chip

# creating and terminating process #
- termination
    - returning from the main routine
    - exit - terminates depending on status
        - exit(0) - normal termination
        - exit(1) - abnormal termination

- fork - parent process creates a new running child process by calling fork
    - called once but returns twice
    - child is almost identical to parent
    - child PID (process ID) is different from parent PID
    - returns twice because it returns the PID of the child to the parent and 0 to the child
    - fork returns -1 if it fails
    if ((pid = fork()) < 0) { # remember to use parens
        fprintf(stderr, "fork error%s\n", strerror(errno));
        exit(0);
    }
    - do error checking on every system call

    - examples in the text book will use capital letters for system calls
    - when you call fork it's gonna create a child process so now you have two programs in execution 
        - parent return value is PID of child
        - child return value is 0 
        ./fork
        parent: x=0
        child: x=2
        int main()
        {
            pid_t pid;
            int x = 1;

            pid = Fork();
            if (pid == 0) {
                printf("child: x=%d\n", ++x);
                exit(0);
            }

            /* Parent */
            printf("parent: x=%d\n", --x);
            exit(0);
        }
        - logic of the child comes before the logic of the parent
        - once these processes are created they are independent of each other with the kernal so they can print in whatever order

        # Process Graph #
        - see written notes (nevermind but still write this from slides)
        - both of them got thei own copy of x being 1
        - feasible - output if you in the same process a has to go before b
        - infeasible - b goes before a in the same process

## Career fair topics ##
- What questions should person ask? Pretend to be excited about it
- Show that you've looked into it - deeper level
- Recursion girl - students tht had done their research before they walk up
    - doesn't wanna hear what does the company do
    - questions about what it takes
    - more techinical questions
- federal gov guy
    - what does the job actually look like?
    - Questions you need answered to see if it's for you or not
    - How am I gonna fit?
# What's the process for hiring? #
- 10 weeks
- Recursion hires year down - if there's an open position it's on website
- internships are open during fall *look at this* - 5 stages
- 1. Application - Referal
- 2. Phone screen - 30 minutes - HR team - makes sure you are who you are
- 3. On site interviews - 1 hour - hiring manager - coding challenge
- 4. Final interview - boss 
- Wasatch Energy Management has info sessions - usually hiring for internships
- person goes above and beyond beyond cover letter
- coding challenge
- how do people understand if their a good fit? 
    - people that are intersted in working with each other
    - Boss likes BYU
some of the companies that will be there

## HW 2 ##
# Level 1 #
cat - concatenate files and print on the standard output
- cat file1 file2 - will print the contents of file1 and file2 to the standard output
- cat file1 file2 > file3 - will print the contents of file1 and file2 to file3
- cat file1 file2 >> file3 - will append the contents of file1 and file2 to file3
- cat readme.txt will print the contents of readme.txt to the standard output

# Level 2 #
- output redirection - > - will redirect the output of the program to a file
- how to redirect the output of the program to a terminal
     - ./redirect > /dev/null

# Level 3 #
- awk - pattern scanning and processing language
- awk '{print $1}' file.txt - will print the first column of file.txt
- the password can be found in the second column of the line in "file.txt" that begins with "eget"
    - use grep and awk
    - grep "eget" file.txt | awk '{print $2}'
    - find the line that begins with eget by using grep and then print the second column using awk
        - grep "eget" file.txt - will print the line that begins with "eget"
        - awk '{print $2}' - will print the second column of the line
        - use grep to omit letters but keep everything else
            - grep -o '[0-9]*' file.txt
- awk '/eget/ {print $2}' file.txt
     - '/eget/' - pattern to search for
        - '{print $2}' - print the second column

# Level 4 #
- lexicographically - dictionary order
    - sort - sort lines of text files
    - sort file.txt - will sort the lines of file.txt in lexicographical order
- base64 - encoding and decoding
    - base64 - encode or decode base64 files
    - base64 -d file.txt - will decode file.txt
    - base64 file.txt - will encode file.txt
- tail - output the last part of files
    - tail -n 1 file.txt - will print the last line of file.txt
    - tail -n 1 file.txt | base64 -d - will decode the last line of file.txt

# Level 5 #
- md5sum - compute and check MD5 message digest
    - md5sum file.txt - will compute the MD5 message digest of file.txt
    - md5sum -c file.txt - will check the MD5 message digest of file.txt
- cut - remove sections from each line of files
    - cut -d " " -f 1 file.txt - will print the first column of file.txt
    - cut -d " " 1-32 file.txt - will print the first 32 characters of file.txt
- dig +short example.com A - will print the IP address of example.com
- print only numbers from file with awk
    - awk '{print $1}' file.txt
- print only numbers from file with grep
    - grep -o '[0-9]*' file.txt
The password for Level 5 is the first 32 digits of the hexadecimal representation of the md5 sum of the DNS text record for example.com
    - dig +short example.com TXT | md5sum | cut -c 1-32
    - dig +short example.com TXT - will print the DNS text record for example.com
    - md5sum - will compute the MD5 message digest of the DNS text record
    - cut -c 1-32 - will print the first 32 characters of the MD5 message digest

# Level 6 #
- gzip - compress or expand files
    - gzip file.txt - will compress file.txt
    - gzip -d file.txt.gz - will decompress file.txt.gz
        - file.tar.gz
    - gzip -c file.txt - will compress file.txt and print the compressed file to the standard output
- tar - an archiving utility that combines multiple files into one file
    - you open a tar file with tar -xvf file.tar or tar -xvf file.tar.gz
    - tar -cvf file.tar.gz file.txt - will create a tar file of file.txt
- tr - translate or delete characters
    - tr 'a-z' 'A-Z' file.txt - will translate all lowercase letters to uppercase letters in file.txt
    - tr -d 'a-z' file.txt - will delete all lowercase letters in file.txt
- The password for Level 6 (username: bandit6) is tar/gzip'd in the file
level6.tar.gz, but all the "F" characters should be replaced with "L".

Hint: gzip, tar, tr
    - gzip -d level6.tar.gz - will decompress level6.tar.gz
    - tar -xvf level6.tar - will extract level6.tar
    - tr 'F' 'L' - will replace all F characters with L characters
    - I'm getting permission denied when I try to decompress the file
    - altogeter - gzip -d level6.tar.gz | tar -xvf - | tr 'F' 'L'


# Level 7 #
- disable progress meter with -s
- most options requie another value next to it
- curl -s http://example.com - will print the contents of example.com to the standard output
- sha1sum - compute and check SHA1 message digest
    - sha1sum file.txt - will compute the SHA1 message digest of file.txt
    - sha1sum -c file.txt - will check the SHA1 message digest of file.txt
- altogether curl -s https://imaal.byu.edu/cs324/bandit.txt | sha1sum | cut -c 1-32

# Level 8 #
- ctrl z - suspends the process
- you resume the process with fg
- %+ - brings the most recent process to the foreground
- bg %+ - will run the most recent process in the background

# Level 9 #
- sort -u - will sort the lines of a file and remove duplicates
    - sort -u file.txt - will remove duplicate lines from file.txt
    - sort 
- uniq - report or omit repeated lines
    - uniq file.txt - will remove duplicate lines from file.txt
    - uniq -c file.txt - will print the number of times each line appears in file.txt
    - uniq -d file.txt - will print only the duplicate lines in file.txt
- tail 
- awk - '{print $2}' file.txt | sort | uniq -c | sort -nr
    - awk - '{print $2}' file.txt - will print the second column of file.txt
    - sort - will sort the lines of file.txt
    - uniq -c - will print the number of times each line appears in file.txt
    - sort -nr - will sort the lines of file.txt in reverse numerical order
    - sort level9.txt | uniq -c | sort -d | tail -n 1 | awk '{print $2}'

# Level 10 #
- file descripter duplication
- dup - duplicates a file descriptor
- dup2 - duplicates a file descriptor to another file descriptor
   - dup2(oldfd, newfd) - copies oldfd to newfd
- find fild descripters with fileno
    - fileno(stdin) - will return the file descriptor for stdin


## Lecture 3 ##
# Review #
- fork - creates a new process
    - difference between parent and child
    -   different PIDs
    -   child returns 0
    -   parent returns the PID of the child
    - same file descripter table and v-node
- fork example
```
    int main()
    {
        pid_t pid;
        int x = 1;

        pid = Fork();
        if (pid == 0) { /* Child */
            printf("child: x=%d\n", ++x);
            exit(0);
        }

        /* Parent */
        printf("parent: x=%d\n", --x);
        exit(0);
    }
```
- fork example output
```
    parent: x=0
    child: x=2
```
- fork example output explanation
    - parent and child have their own copy of x
    - parent and child are independent of each other
    - child pid is 0 because it's the return value of the child

# New Material #
- Topological sort
    - given a directed graph, find an ordering of the vertices such that for every edge u -> v, u comes before v
    - used in scheduling, task ordering, and dependency resolution
    - can be done with depth-first search
# Reaping Child Processes #
- zombie - process that exited but is still known by the system
- if parent reaps child it gets exit status of child and there's nothing known about child
- if parent doesn't reap child, child becomes a zombie - kernal still knows about it
- orphan - parent dies before child - init will reap it
- shells and web servers can consume resources when it comes to zombies
- when process terminates , it still consumes resources; eg file descriptors, exit status
- defunct - means its a zombie
- wait - waits for a child process to terminate
    - pass in an integer
    - passes in a pointer to an integer that will store the exit status of the child
    - wait(int *child_status)
    - returns the PID of the child that terminated
- waitpid - waits for a specific child process to terminate
    - waitpid(pid_t pid, int *child_status, int options)
    - pid - PID of the child to wait for
    - child_status - pointer to an integer that will store the exit status of the child
    - options - options for the waitpid function
    - returns the PID of the child that terminated

## Lecture 4 ##
# execve #
- int execve(const char *filename, char *const argv[], char *const envp[])
    - filename - name of the file to execute
    - argv - array of strings that represent the arguments to the program
    - envp - array of strings that represent the environment variables
- execve - replaces the current process with a new process
- when you call execve any code after that will not be executed
- picture of stack is on slides
- execve will be super helpful in Lab 1
    - kind of like a pipe
    - meaning the output of the first command will be the input of the second command
- is called but never returned unless there is an error

# file descripters review 
- file descripters point to the file
- pipe / - will open two file descripters