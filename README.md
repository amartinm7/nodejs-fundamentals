
# how to:

to init a new project

```bash 
> npm init
```

to run npm execute

```bash 
export NVM_DIR="/Users/antonio.martin/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

install jest for testing as 

```bash  
> npm install --save-dev jest
```

link the local lib if you have using the name of them, as example

```bash 
> npm link 
```

setup the package.json the script.test property to "jest"

```bash  
> "test": "jest"
```

execute the test with

```bash 
> npm test
```

see the results


# Using `npm link`

Example:
```bash
cd <viking-project-root>
npm link # create a global symlink to the local "viking" project
cd <tudor-project-root>
npm link viking # create a symlink locally to global viking symlink
# voila! now we can develop the two projects side-by-side without   # having to worry about publishing either of them
```
