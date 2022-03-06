const { expect } = require('chai')

let Alpha, alpha


describe('Alpha (proxy)', function () {
  beforeEach(async function () {
    Alpha = await ethers.getContractFactory("Alpha")
    alpha = await upgrades.deployProxy(Alpha, [99], { initializer: 'store' })
  })
  it('retrieve returns a number previously initialized', async function () {

    expect((await alpha.retrieve()).toString()).to.equal('99')
    expect(() => { alpha.increment() }).to.throw(TypeError)
  })

})