pragma solidity 0.5.9;


contract Storage {

    bytes32 public something;

    function storeSomethingForMe(bytes32 _something) public {
        something = _something;
    }

}

