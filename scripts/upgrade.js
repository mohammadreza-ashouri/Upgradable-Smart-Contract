async function main() {
    const Beta = await ethers.getContractFactory("Beta")
    let beta = await upgrades.upgradeProxy("0x54b5c6784B5125a98Dd20Ce5E565ee8B581c542c", Beta)
    console.log("the upgrade is done!", beta.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
