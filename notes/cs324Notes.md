# Lecture 2

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
- when process terminates , it still consumes resources; eg file descriptors, eit status
- defunct - means its a zombie
- wait - waits for a child process to terminatex
    - pass in an integer
    - passes in a pointer to an integer that will store the exit status of the child
```
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

# fork()
- returns pid2(PID of child) in the parent; returns 0 in the child

# close()
- when all references to the file description entry are removed, the entry is removed; it is"open" until then

# dup2()
- will close one fd and point it at the same file description as another file description

- slides are essential for lab1

# pipe()
- will use in lab1
- creates two new file descripters and one will have a read and other will have write
- will close(m) read end of parent pipe and close(n) write end of child pipe
- setpgid() allows parent to reap children properly

## Book 10.5-10.12
- 10.5 - about rio
- 10.6 
    - stat - get file status - takes a file name
    - fstate - get file status - takes a file descriptor
- 10.7
    - opendir - takes a pathname and returns a pointer to a DIR stream
    - d_ino - file location
    - d_name - file name
- 10.8
- 10.9 - I/o redirection
    - dup2(oldfd, newfd) - copies oldfd to newfd
- when an exception occurs, control passes to the appropriate exception hadler, and the the processor switches to kernel mode. When it resumer running application code, the processor switches back to user mode.

when -1 is passed as the pid (first aruent to waitpid(), the wait set consists 
can a pid be negative? -1 is a special value that means wait for any child process

- trap - control passes to the appropriate exception handler, after which the handler returns control to the instruction 

# HW 3 #
- waitpid - waits for a specific child process to terminate
    - waitpid(pid_t pid, int *child_status, int options)
    - pid - PID of the child to wait for
    - child_status - pointer to an integer that will store the exit status of the child
    - options - options for the waitpid function
    - returns the PID of the child that terminated
- ps -p 1234 - will print the status of the process with PID 1234
    - will fetch the processes only run by fork() by using ps -p 1234
    - can do multpile processes by using ps -p 1234, 1235
- ps -o pid,ppid,pgid,sid,comm - will print the PID, PPID, PGID, SID, and command of the process
    - pid=PID, ppid=PPID, pgid=PGID, sid=SID, comm=command
    - user=USER - will print the user of the process
- wait() - waits for a child process to terminate
    - pass in an integer
    - passes in a pointer to an integer that will store the exit status of the child
    - wait(int *child_status)
    - wait(NULL) - will wait for any child process to terminate
    - wait() - will wait for any child process to terminate
    - fopen - opens a file
        - FILE *fopen(const char *filename, const char *mode)
        - eg: FILE *fp = fopen("file.txt", "r");
        - Before the call to fork(), open the file fork-output.txt for writing (see the man page for fopen(3)
        - FILE *fp = fopen("fork-output.txt", "w");
            - *fp - pointer to the file
            - FILE - type of the file
        - fileno - gets the file descriptor of a file
            - int fileno(FILE *stream)
            - fileno(fp) - will get the file descriptor of the file
        - write to a file by using fprintf
            - fprintf(fp, "Hello, world!\n");
            - fprintf(fp, "Hello, world!\n") - will write "Hello, world!" to the file
        - fflush - flushes the output buffer of a file
            - int fflush(FILE *stream)
            - fflush(fp) - will flush the output buffer of the file
        - pipe - creates a pipe
            - int pipe(int pipefd[2]) - will create a pipe
            - pipe(pipefd) - will create a pipe
                - difference between int pipefd[2] and pipefd
                    - int pipefd[2] - declares an array of two integers
                    - pipefd - is a pointer to an integer
            - pipefd[0] - read end of the pipe
            - pipefd[1] - write end of the pipe
        - close read end of pipe by using close(pipefd[0])
            - close(pipefd[0]) - will close the read end of the pipe
        - declare buffer by using char buf[1024]
            - char buf[1024] - declares a buffer of 1024 characters
        - Read from file descriptor corresponding to the read end of the pipe (see the man page for read(2)) into a buffer that you have declared. Save the number of bytes read (return value of read()), and use that value to add a null character after them, so string operations can be performed on it (see the man page for string(3)).
            - int n = read(pipefd[0], buf, 1024);
            - read(pipefd[0], buf, 1024) - will read from the read end of the pipe into the buffer
            - buf[n] = '\0'; - will add a null character after the bytes read
        -Print the string retrieved from read() to stdout. Note that printf() and fprintf() require a null-terminated string, i.e., to know where the string ends. If you have not properly added the null character, the command will yield unexpected results. See an example of adding the null byte here (i.e., after read() was used to read bytes from the file).
            - printf("%s", buf);
            - printf("%s", buf) - will print the string to stdout
        - dif file.txt file2.txt - will print the differences between file.txt and file2.txt
            - diff file.txt file2.txt - will print the differences between file.txt and file2.txt
         
# Lecture 5 #
- exceptional control flow
    - exception will happen if there's a change in the control flow of a process
    - exceptions are caused by the processor
    - exceptions are handled by the kernal
- interrupt - caused by ctrl-c
- traps - intentional exceptions
    - waitpid
    - system calls
    - breakpoint traps
- faults - unintentional but recoverable
    - page faults
    - segmentation faults
- aborts - unitentional and unrecoverable

- system calls - things that are called within the program that cause context switches
    - read, write, open, close, fork, execve, waitpid, pipe, dup2
    - system call happens there will be a breaking program and something will happen in the kernal
- page faults - when a program tries to access a page that is not in memory

## 8.4
- parent and child have different have their own private address spaces meaning meaning any change in one of the processes will not affect the memory of the other processes
- concurrecncy - is a process starts before another has ended it is concurrent
- exceptional control flow
- can change from user mode to kernal mode by using system calls
    - fork, execve, waitpid, pipe, dup2
- exceptions can be caused by the processor or the program to enter kernal mode
- when exception happens kernal gets control

- asynchronous exceptions - coming from the outside
    - cntrl-c
    - timer interrupt
- synchronous exceptions - coming from the inside
    - system calls
    - traps
    - faults
    - aborts

## Signals
- notifies the process that an event has occurred
- 2 SIGINT - teminates - user typed ctrol-c
- there's a function call kill and system call kill and their not the same
*exam
- send - sends a signal to a process
- recieve - recieves a signal

- can catch the signal by using a signal handler
- tell system that instead of doing default thing you want it to do the thing that you coded

*exam
- anytime we run a process the kernal does this calculation
- it gets pending + not blocked
    - if this is not zero then it will get lowest number signal and will receive it
    - receiving part is what checks if the signal is blocked or not, then it will act on it
        - ready to take action on the signal
    - kernal mark the pending bit - send
    - kernal will check if the signal is blocked or not
    - if no non zero it will go to the lowest number signal and receive will receive it
    - signals cannot be used to count the occurences of events in other processes

*exm
cat < input.txt | grep byu [0-9] > results.txt
- cat < input.txt - redirects to standard in
- grep byu [0-9] - will search for byu and a number
- child1 will be cat
- child2 will be grep
- bash will call pipe
- whe pipe get's called, read and write ends of the pipes are in file descripters 3 and 4

while all the processes are in a sleep loop
kernel detects all of them; it will be context switching between all of them
- however; when the kernal comes back to c1, it will come back to the parent process and mark that as a one. but the parent process is not running; 
- you know that a sif child was eived but actuallly two were received
and it's a zombie
his point is that they could have terminate it all; there are 4 sigshilds sent to parent
- do pending and not blocked; means there was at least on bit that was sent
- marks the pending as 0; looks like the sigchild handler was called once even though it was called 4 times
- you can't write a signal handl rto count the nulmber of signals received

## IO Redirection ##
- if there's an & on the right hand side of fd then treate fd as an index into file descripter table
- for ./a.out | grep A - stout is only one going through pipe and getting filtered. stderr is just printed to terminal.
- ./a.out | grep FOO - just XYZ will be outputed
- bash will do redirection of the pipe first
- ./a.out s>&1 | grep X - redirects both stderr and stout to pipe

# Sockets
application constains
- server and one or more client processes
- server - manages a resources
- transaction - client sends a request to the server and the server sends a response to the client
    1. cliet sends request to server when it needs something
        - web browser needs a file
    2. server receives and interprets request
        - web server receives reqenst and reads disk
    3. server sends response to client
        - web server sends file to web browser(client)
- clients and server are not hosts
- host - runs multipel clients and servers concurrently
- computer network - collection of hosts that are connected by a communication 
- hub - connects hosts
- bridge - connects networks
- lan - local area network
- wan - wide area network
- internet - collection of networks
- host addresses are assigned to internet addresses
- deliverym echanistm - packets

1. The client. 011 host t-invo,kes a system c~ll that copies the data from the client's 
virtual address space intp a kernel buffer. 
2. The protocol software on host A creates a l:ANl frame by appending an 
internet heaaef'.and a·LANl frame l\eadento the data. The internet header 
is addressed to internet host B. The LANl frame header is addressed to the 
router. It then passes the frame to the adapter. Notice that the.payload ofthe 
LANl frame is an internet packet, whose payload.is the actual user data. This 
kind of encapsulation is one of the fundamental insights of internetworking. 
- adresses are assigned in big-endian netwrok byte order
- htonl - converts a 32-bit integer from host byte order to network byte order
- ntohl - converts a 32-bit integer from network byte order to host byte order

- soket interface - set of functiontions that build network applications
- socket function - creates socket descriptor   
    - int socket(int domain, int type, int protocol)
- connect - connects a socket to a server
    - int connect(int sockfd, const struct sockaddr *addr, socklen_t addrlen)
- bind - assigns an address to a socket
    - int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen)
- listen - listens for connections on a socket
    - int listen(int sockfd, int backlog)
- accept - accepts a connection on a socket
    - int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen)
- listening descriptor - socket that listens for connections
    - last for lifetime of server
- connected descriptor - socket that is connected to a server
    - lasts for lifetime of connection
- getaddrinfo - gets address information
    - int getaddrinfo(const char *node, const char *service, const struct addrinfo *hints, struct addrinfo **res)
- getnameinfo - gets name information
    - int getnameinfo(const struct sockaddr *sa, socklen_t salen, char *host, size_t hostlen, char *serv, size_t servlen, int flags)
- send - sends data on a connected socket
    - ssize_t send(int sockfd, const void *buf, size_t len, int flags)
        - example
            - send(sockfd, "Hello, world!", 13, 0)
## UDP
- udp - user datagram protocol
- connectionless
    - can have con receive from call that reads from exactly one datagram
    - send()/sendto()/write() - sends exactly one datagram
    - recv()/recvfrom()/read() - reads from exactly one datagram
- no stroing
- unreliable - can send a datagram at a time and only receive a datagram at a time
    - this means that the datagram can be lost
    - read(2) abc it reads ab and c is forgotten
    - if asked to read(2) again is will read de from def from the next packet
- exam 2 look at slides for socket-client server
- TCP - transmission control protocol
    - connection protocol
        - connect is different than UDP
        - read(5) will read 5 bytes from abcde from the packets abc and def and f will be stored in the buffer
        - server combines the sendto when they're sent together while in udp you would be sending a datagram and they'll be sent separately
- Exam review
    - udp
        - if it's udp nread1 would be 5, with the last 5 of nwritten1 being lost
        - nread2 sould read all of up to the 10 of nwritten2
        - recv(100) would just be a blocking call
    - TCP
        - nread1 will be the first 5 of nwritten1
        - nread2 will read the last 5 of nwritten1 and first 10 if nwritten2
    - udp doesn't know the order of A and B

# Midterm 1 Mistakes
- Missed Questions: 6-A, 9-A, 17-H, 18-G, 22-D, 24-B, 25-B, 28-C, 29-D, 32-A, 33-A, 39-B-D, 46-B, 47-A

- 6 - B - False 
    - Question: If a parent process terminates without reaping its zombie children, then they will consume system resources until the system is rebooted 
    - Explanation: Since the parent terminates, that means so zombie children are reaped by the init process and the resources are therefore not consumed
- 9 - B - False
    - Question: After a signal handler runs to competion with no errors, the process that received the siganl will always resume execution at the current or next instruction in the user code according to where it was executing before the signal handler was called
    - Explanation: When the signal handler ends it can go back to the signal handler that was interrupted. Meaning it does not always resume at the current or next instruction in the user code.
- 17 - C - **Appeal**
    - Questions: How many different outputs are feasible?
    - Explanation: For the test, I picked from the list of answers used by 18 an 19. My answer for 17 was H because C and F were on that list. However, in my proccess table on my scratch paper, I showed that the possible outputs are 243, 423, and 432
- 18 - H
    - Question: Which are among the possible outputs?
    - Explanation: I picked G because 24 and 42 in that order are in the possible outputs of 243, 423, and 432. Since I had already picked H for 17, I figured that this question must have been different and it was just asking what order of numbers were inside the possible outputs.
- 22 - B 
    - Question: Which is answer is not true?
    - Explanation: Val DOES change. Whenever execve returns an error it returns -1, meaning that val changed.
- 24 - C
    - Question: When does the kernal perform the "pending and not blocked" calculation
    - Explanation: When the claculation is done and it's not zero, it will be received. Every time a process is being scheduled to run that calculation is done.
- 25 - A - **Appeal**
    - Question: When is a SIGCHLD signal sent?
    - Explanation: There was big fat B right next to the question so I thought that was the answer. But anyways, B couldn't be true because the SIGCHLD exists even if you don't install a handler for it. The true answer is A because every process has a parent, meaning, every time a process terminates it send a SIGCHLD signal.
28-C, 29-D, 32-A, 33-A, 39-B-D, 46-B, 47-A

- 28 - A - The child and parent are both running
    - Question: What is are the proccesses like at t = 25?
    - Explanation:
- 29 - A - The child and parent are both running
    - Question: What is are the proccesses like at t = 25?
    - Explanation: The child and parent are both running

- 39 - B
    - Question: Where should close(pipefd[0]) be placed in the code?
    - Explanation: B and D were right but I forgot to also close the read end of the pipe in the parent. 

- 46 - G - 32
    - Question: What does the terminal print out? Insert no code
    - Explanation: Sigchld signal is received because the child process terminated so "3" is sent to the terminal. The 2 is printed because the child process exited normally. Since sleep(2) in the parent is shorter than the child’s sleep(4), the child process will still be running when waitpid is called. Therefore, waitpid returns 0 (indicating the child has not yet exited), and the parent skips the if block that prints the exit status.

- 47 - C - 3
    - Question: What does the terminal print out? Insert sleep(4) in section 1.
    - Explanation: The child process terminates and sends a SIGCHLD signal to the parent.



```
28
1. pid_t pid;
2. void sigint_handler(int signum) {
3.      int status;
4.      sigset_t mask, old_mask; // bit vector that’s as big as the pending and bit arrays
5.      if (pid > 0) {
6.              sleep(10);
7.              kill(pid, SIGTERM);
8.              sleep(10);
9.              if (waitpid(pid, &status, 0) > 0) {
10.                     sleep(20);
11.             }
12.    
13.             else {
14.                 kill(pid, SIGKILL);
15.                 sleep(10);
19.             }
20.     }       exit(0);
20. } else { //child
    sleep(20);
    exit(0);
}
21. int main() {
22.     struct sigaction sigact;
23.     memset(&sigact, 0, sizeof(sigact)); //initializes everything to 0
24.     sigact.sa_handler = sigint_handler;
25.     sigact.sa_flags = SA_RESTART;
26.     sigaction(SIGINT, &sigact, NULL); //install SIGINT handler
        sigaction(SIGTERM, &sigact, NULL); //install SIGTERM handler
27.     pid = fork();
28.     while (1) { sleep(1); }
29.     return 0;
30. }
```

```
46
    void sogchld_handler(int signum) {
        printf("3");
    }
    int main () {
        pid_t pid;
        int status;
        struct sigaction sigact;
        siact.sa_flags = 0;
        sigact.sa_handler = sigchld_handler;
        sigaction(SIGCHLD, &sigact, NULL);
        if ((pid = fork()) == 0) {
            // SECTION 1 CODE
            exit(0);
        }
        sleep(2);
        // SECTION 2 CODE
        if (waitpid(pid, &status, WNOHANG) > 0) {
            if (WIFEXITED(status)) {
                printf("%d", WEXITSTATUS(status));
            } else {
                printf("1", WEXITSTATUS(status));
            }
        }
        for (int i = 0; i < 10; i++) {
            printf("1");
        }
    }
```

```
17
int main()
{
    int x = 3, pid;
    if (fork() > 0) {
        printf("%d", ++x);
    }
    printf("%d, --x);
}
```
# Threads
iteratice servers
- server that can't really accept multiple concurrent flows at the same time

concurrent servers
- process-based servers
    - it spawns separate process for each client
    - makes a new child using fork
    - child will close listenfd because it's not foing to call accept so listenfd soesn't need a ref of 2
    - exit will make the child coofd clse but parent does need to slose the connfd
    - if several sigchild signals are sent we might lose one so we need the while loop or else we might lose some
- event-based servers
    - you go and handle them in a single thread using epoll
    - write so you never have a blocking call
- thread-based servers
    - similar to proccess-based but uses threads
    - each thread has its own stack and id
    - threads don't hace a heiarcarchy
    - share the same code and program
    - threads can be concurrent
    - int connfd = *((int *)vargp); - will cast the void pointer to an int pointer and then dereference it
        - this means that the void pointer is a pointer to an int
    - issues
        - must run detached to avoid memory leak
        - either joinable or detached
        - be caful with unintended sharing - if you create a thread and apss an address of some local variable, you have a pointer into the main threads stack space
            - dangerous because some other function can take up that stack space in the main thread
            - for the most part threads are more efficient than processes but we sometimes use processes because they're safer and you don't need speed when typing into a shell

- semaphone - non-negative global integer sychronization variable. Manipulated by P and V operations
    - if P is zero the thread is going to stop
    - semaphore is always greater than or equal to 0
    - P - wait - void P(sem_t *sem) - one that can blcok
    - V - post - void V(sem_t *sem) - one that can unblock
    - any part of the code that is using a shared variable from multiple threads we need to protect it with a semaphore
    - surround critical section with p and v
    - it's orders of magnitude
    - let's one thread at a time into the critical section
    - mutex will be set to one 1 and if it's in a critical section it will go to 0
        - has to be global in order to be used on multiple threads
        - nonnegative integer
        - usually uses 1 or 0 to say if it's in critical section or not
        - mutex is a binary semaphore
    - understand initializing of semaphores
        - sem_init(&sp->mutex, 0, 1) - will initialize the mutex semaphore to 1
        - sem_init(&sp->slots, 0, n) 
        - sem_init(&sp->items, 0, 0)
        - when you call p operations thaen it wlil check ifi tis nonzero and it will decrement n in slots
            - P(slots)
            - when nth call is 0 the buffer will have n items and it will block
            - if buffer becomes then P(slots) will block
        - V(slots) will increment the number of slots
            - can be called in a whole different function
        - if items = 0 the P(items) will block it because it is 0
            - will wait for V(items) to be done cause that increments items
        - p is only producgin n amount of htings at maz
        - p(items) - if items is 0 you are blocking consumer
        - binary sempphore - 01 - used to see if it's in the critical section
        - counting semaphore - 0, 1, 2, 3 - used to see how many slots are available
        - mutex has to be global variable
        - memorixe textbook description of semaphores
        - what kind of values can be held in counting semaphores? 
            - a nonnegative integer
        - when we set items to be 0 to control consumers because want to call te p operation on items in the consumer
        - we want the first consumer to block until we have something to consumer
        - slots = n
        - will put a p operation on slots to block the producer
        - if we don't have any consumers p will be on slots and it will contniue and fiill thaht buffer up
        - think of slots as empty slots
        - items are items ready to consumer
    # Reader-Writers
    - as long as there are readers we are going to let them read - (favors reader) 
        - first readers-writers problem
        - if we had a while loop with only p(&w) and v(&w) it would just read once
        - the p(&mutex) etc is giving exclusive access to read count
        - first reader will get a lock on w and v will realease that lock
    - second readers-writers problem
    - starvation - looks indefinitely
# Lab Threadpool
- if you have nreadd== 0 you did something worng for step 1
```
size_t total_bytes_read = 0;
char buffer[MAXSIZE];
while (1) {
    size_t nread = recv(sfd, buffer + total_bytes_read, MAXSIZE - total_bytes_read);
    if (nread < 0) {
        error("recv");
    }
    if (nread == 0) {
        break;
    }
    total_bytes_read += nread;
    check_if_done(); // checks if it ends in /r/n/r/n
}
- have some loop to handle short reads
```
# Test 2
- i.o redirection
- signals
    - kill(pid, SIGINT) - 1 sleeps for 30
    - sleep(5)
    - kill(pid, SIGTERM) - 1 sleeps for 30
    - sleep(40)
    - 2 from SIGTEMM
    - SIGINT forgets about sleep(30) and foes straight to printf(2)
    - when sleep is interruptted by a signal it doesn't come back and finish its duration
    - kill(pid, SIGKILL) kills child
    - 1, 1, 2, 2
- setpgid(0,0)

- semaphores and sockets
- P(s) - if s is nonzero, then P decrements s and returns immedieatlet. If s is zero, then suspend the thread until s becomes nonzero and the thread is restarted by a V operation. After restarting, the P operation decrements s and return control to the caller.
- V(s) - the V operation increments s by 1. If there are any threads blocked at a P operation waiting for s to become nonzero, then the V operation restarts exactly one of the threads, which then completes its P operation by decrementg s.
- sem_init(sem_t *sem, 0, unsigned int value)
    - this initializes the semaphore to the value
    - each semaphore must be initialized before it can be used
- sem_wait(sem_t *sem) = P(sem_t *sem)
- sem_post(sem_t *sem) = V(sem_t *sem)
- mutex - binary semaphore meant to provide mutual exclusion
- P operation is blocking the mutex and V is unblocking
- counting semaphore - semaphore that is used as a counter for a set of available resources
- also used to schedule accesses to shared resources 
    - thread uses a semaphore operation to notify another thread that some condition in the program 
- producer-consumer problem - the producer generates items and inserts them into a bounded buffer.
    - the consumer removes items from the buffer and then consumes them.
    - share a bounded buffer with n slots
    - can't just uses mutex, we also need to scheduel acces to the buffer
    - if the buffer is full (there are no empty slots), then the producer must wait until a slot becomes available
    - if buffer is empty (there are no available items), then the consumer must wait until an item becomes available
- slots and items are counting semaphores
- slots means empty lstos

- reader-writers problem
    - readers - thread that only read
    - writers - thrads that modify an object
    - first readers-writers problem 
        - favors readers
        - no reader shall be kept waiting unless a writer has already been granted permission to access the shared object
        - no reader should wait simply because a writer is waiting
    - second readers-writers problem 
        - favors writers
        - writer gets to write as son=on as possible
        - reader has to wait even if the writer is also aiting

# Skillathon
- NotebookLM - simulates stuff in a podcast
- GLM - history.contenct/prompt implies predicted word
- in order to predict word you need to know about everythning
- zero shot prompting - givinh instructions
- few - shot - giving an example then the thing that we want

# Midterm 3
- 15 questions - 1st midterm
- 53 questions in all
- alwaysi nitialize binary semaphore to 1
- it is okay to initialize something to zero, particularlt for consmers
- waitpid - review
    - waitpid - what a process calls when it want to reap its children
    - 0 means it's blocking - waiting for the child process to end
    - WNOHANG - will return immediatley if no child has exited
    - &wstatus
        - WIFEXITED - returns true if the child terminated normally; still exited even if there was an error EXIT(3); will be false if terminated by sgnal
    - process groups
        - every process has its own id
        - every process has a parent process
        - every process has a group id
        - default - parent's pgid
        - setpgid(0,0) - sets the process group id to your process id
            - significant because the shell can receive signals and it will forward that to the process group of the forground pprocess
        - kernal does pending and not blocked calculation every time the kernal switches from kernal code to user code
            - everytime a process is being scheduled to run
    - threads
        - ptrhead+create
        - joinable - default
        - pthread_join
        - detatch
            - if its detathced the system will reclaimit's thread stack if it ends
            - another thread will specifically call join on it
        - if any thread calls exit the program terminates
        - how does one thread stop without the whole program stopping?
            - pthread_exit
            - join it to the main thread
            - returning form the function
    - sockets
        | Type of Socket | Client | Server | TCP | UDP |
        |----------------|--------|--------|-----|-----|
        | Socket         |   X    |   X    |  X  |  X  | returns fd
        | Bad            |   opt  |   X    |  X  |  X  | local port
        | listen         |   no   |   X    |  X  |  no |
        | accept         |   no   |   X    |  X  |  no | blocking fd; returns fd
        | connect        |   X    |   no   |  X  |  opt|
        | read/write     |   X    |   X    |  X  |  X  |
        | send/recv      |   X    |   X    |  X  |  X  |
        | sendto/recvfrom|   X    |   X    |  opt|  X  |
        | close          |   X    |   X    |  X  |  X  | 
        - connect
            - for tcp the three way handshake happens
            - for udp its optional because there is no communication
                - way to show the server you intend to talk to
                - can use send or receive or read write
# Parallelism - no on Midterm 3
- p process cores - Tk is the running time using k cores
- if T = 10, p = .9 (90% can get sped up), k = 9
- Amdahl's Law - Tk = T/(1 - p + p/k)
- T9 = .9*10/9+,1*10=1+1= 2
- least possible running time
    - Tinf = .1 * 10 = 1
- OpenMP - used to parallelize loops