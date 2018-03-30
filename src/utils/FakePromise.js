class FakePromise {
  constructor (executor) {
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onResolveArr = []
    this.onRejectArr = []

    this.then = (onResolve, onReject) => {
      if (this.status === 'resolve') {
        onResolve(this.value)
      }

      if (this.status === 'reject') {
        onReject(this.reason)
      }

      // 把onResolve，onReject存起来
      if (this.status === 'pending') {
        this.onResolveArr.push(onResolve)
        this.onRejectArr.push(onReject)
      }
    }

    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  resolve = (value) => {
    if (this.status === 'pending') {
      this.status = 'resolve'
      this.value = value

      this.onResolveArr.forEach((onResolve) => {
        onResolve(value)
      })
    }
  }

  reject = (reason) => {
    if (this.status === 'pending') {
      this.status = 'reject'
      this.reason = reason

      this.onRejectArr.forEach((onResolve) => {
        onResolve(reason)
      })
    }
  }
}

export default FakePromise
