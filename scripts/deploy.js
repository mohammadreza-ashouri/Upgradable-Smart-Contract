async function main() {
    const Alpha = await ethers.getContractFactory("Alpha")
    console.log("Deploying Alpha, ProxyAdmin, and then Proxy...")
    const proxy = await upgrades.deployProxy(Alpha, [99], { initializer: 'store' })
    console.log("Proxy of Alpha deployed to:", proxy.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })